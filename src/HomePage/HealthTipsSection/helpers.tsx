import { Optional } from "../../helpers/general";

export enum ThumbnailType {
    text,
    audio,
    video,
}

export type HealthTipThumbnailInfo = { thumbnailType: ThumbnailType.text } |
{ thumbnailType: ThumbnailType.audio } |
{ thumbnailType: ThumbnailType.video, thumbnailImageURL: string };

export type HealthTip = {
    date: Date;
    title: string;
    description: Optional<string>;
} & HealthTipThumbnailInfo;

export async function fetchHealthTips(): Promise<HealthTip[]> {
    return fetch('https://better-living-backend.herokuapp.com/health-tips/?maxAmount=5')
        .then(async response => {
            const json = await response.json();
            if (json.isSuccess === false) {
                throw new Error(json.errorMessage);
            };

            const data = json.data as any[];

            console.log(data);

            return data.map((x: any) => {
                const healthTip: HealthTip = {
                    date: new Date(x.date),
                    title: x.title as string,
                    description: x.article_text as Optional<string>,
                    ...((() => {
                        const something: HealthTipThumbnailInfo = (() => {
                            if (x.yt_video_ids.length >= 1) {
                                const y: { thumbnailType: ThumbnailType.video, thumbnailImageURL: string } = {
                                    thumbnailType: ThumbnailType.video,
                                    thumbnailImageURL: `https://img.youtube.com/vi/${x.yt_video_ids[0]}/0.jpg`,
                                }
                                return y;
                            } else if (x.audio_files.length >= 1) {
                                const y: { thumbnailType: ThumbnailType.audio } = { thumbnailType: ThumbnailType.audio };
                                return y;
                            } else {
                                const y: { thumbnailType: ThumbnailType.text } = { thumbnailType: ThumbnailType.text };
                                return y;
                            };
                        })();
                        return something;
                    })()),
                };
                return healthTip;
            });
        });
}

