
import React from 'react';
import './History.scss';
import vegetablesImage from './vegetables.jpg';
import bloodPressureImage from './bloodPressure.jpg';
import fruitsImage from './fruits.jpg';
import idamamaeImage from './idamae.jpg';
import MountainSVG from './MountainSVG';
import TargetSVG from './TargetSVG';

function History() {
    return <div className="History">
        <div className="title-view">
            <div className="subtitle">
                Our History
            </div>
            <div className="title">
                Lorem ipsum dolor sit, amet consect adipisi.
            </div>
        </div>
        {historyText}
        <div className="line" />
        <div className="author-box">
            <img src={idamamaeImage} alt="" />
            <div className="text">
                <div className="written-by">Written By:</div>
                <div className="name">Idamae Hanna ND, MPH, RD</div>
                <div className="subtitle">
                    Manager & Owner of Better Living Health Center
                </div>
            </div>
        </div>
    </div>
}

export default History;



interface ImageBoxProps {
    imageURL: string;
}

const ImageBox = (props: ImageBoxProps) => {
    return <div className="ImageBox">
        <div>
            <img src={props.imageURL} alt="" />
        </div>
    </div>
}

interface MissionBoxProps {
    iconSVG: any;
    title: string;
    description: string;
}

const MissionBox = (props: MissionBoxProps) => {
    return <div className="MissionBox">
        <div className="title-container">
            {<props.iconSVG />}
            <div className="title">{props.title}</div>
        </div>
        <div className="description">{props.description}</div>
    </div>
}

const MissionBoxes = () => {
    return <div className="MissionBoxes">
        <MissionBox iconSVG={MountainSVG} title="Our Mission" description="To provide quality service in an environment that empowers and motivates people toward total wellness, which includes the physical, mental and spiritual, that will sustain them in this life and in the life to come." />
        <MissionBox iconSVG={TargetSVG} title="Our Goal" description="To help people improve and maintain their health and quality of life through health promotion, education and skills development." />
    </div>
}

const historyText = <div className="text-holder">
    <ImageBox imageURL={vegetablesImage} />
    <p>
        It was in April 1998, that the doors of the Better Living Health Centre opened to the public. It was a dream come true and long over due for according to its two partner owners Dr. Idamae Hanna and Dr. Alvira Higgs. From 1989 they were in partnership presenting health programs to the church and the community, working as Lifestyle Counselors from Uchee Pines Lifestyle Institute. The Better Living Health Center is an institution that is a pioneer in wellness coordination and consultation in the Bahamas.
    </p>
    <p>
        Better Living has the Islands Best Vegetarian Cuisine serving only vegetarian meals empowering people to eat better. It also houses the Islands Best in Natural Foods and Supplements and it is the Islands Best Consultants in Lifestyle Health & Wellness. The center has a Registered Dietitian who provides individualized or group wellness plans for major chronic diseases such as diabetes, hypertension and cancer. The center also provides Corporate and Worksite Wellness Seminars and Programs and is one of the founders of the popular 8 Weeks to Wellness Community Program that has impacted the health of thousands of Bahamians throughout the Bahamas.
    </p>
    <MissionBoxes />
    <p>
        According to Dr. Idamae Hanna; “When we first opened the doors of Better Living we served only soups and sandwiches, we also started with a few organic products and supplements on our shelves and I also set up my office to do private consultations as a registered dietitian. As I remember, the first six months were slow and we couldn’t pay ourselves a salary because everything had to go into paying rent and sustaining our budding business. It wasn’t until six months later that we paid ourselves a stipend of $50.00 each week. Wow, just thinking about it now is amazing. We were truly sustained by the power of God.”
    </p>
    <p>
        It was about three months after we started that we were inspired by a program on Three ABN Broadcasting network. The person on the set was giving her testimony of how she started a business similar to Better Living and how she got her product and her business marketed to the community. She was able to advertise by giving. What a great biblical concept - being able to receive by giving. She decided to do a free health expo at a mall in her community and in doing this, the community got to know about her business and the wonderful health information and products she had to offer and from then her business bloomed.
    </p>
    <ImageBox imageURL={bloodPressureImage} />
    <p>
        This idea was exactly what we needed for Better Living and we started working on it right away. It was from this backdrop and the opportunity to promote their budding new business, that the Better Living Health Centre hosted its first Annual Health Extravaganza in November of 1998 at the Mall at Marathon. This community outreach did so much for bringing health awareness to the community and it did so much for getting Better Living on the map. Last year we celebrated our 15th Annual Health Extravaganza for Better Living and each year it gets bigger and better.
    </p>
    <p>
        As would be expected, programs such as these cost a lot of money, time and commitment, hence the need for networking and partnerships. From the get go Better Living partnered with the Adventist Health Professionals Association and other health organizations and businesses that provided funding and professional services for the programs over the years. During the very first program in 1998, due to the great need of health awareness, many businesses were happy to participate with us in the program.
    </p>
    <p>
        They sponsored us on the TV program, “You And Your Money”. On the show a panel of health professionals shared health and lifestyle issues in our community. The show was also instrumental in advertising the upcoming Health Extravaganza and encouraged participants to come out for free blood screening, test tasting of non-cholesterol dishes, and a lot of free health information and goodies. Up to this time no one had done anything like this on this scale in the country. To say the least, it was a great success and Better Living Health Center got a lot of advertisement in the process.
    </p>
    <ImageBox imageURL={fruitsImage} />
    <p>
        From its very inception the Better Living Health Centre was committed to preserving the health of our nation. Many people who desperately needed the help Better Living could provide, could not afford to pay for it, so Better Living had to provide an opportunity to reach out to the community. Today the center is committed to two free health promotion community programs each year. Over the years the institution has been instrumental in co-hosting health fairs, health expos and health seminars in Nassau and the Family of Islands.
    </p>
    <p>
        It was in 2005 when we realized that the Health Extravaganza, although meeting the need for education and awareness, was not able to provide the tools people needed to make lifestyle changes, that we decided to put on a 12 Weeks to Wellness Program. One year later we changed it to the popular 8 Weeks to Wellness program and the rest is history. In 2006 we took the program to our nation’s schools and gained national and international recognition. In 2007 the program placed 2nd in the Caribbean Food and Nutrition Institute (CFNI a subsidiary of Pan American Health Organization) annual competition. The 8 Weeks to Wellness Programs has been replicated in Exuma, San Salvador, Abaco and Eleuthera over the years.
    </p>
    <p>
        Better Living Health Center will continue to educate and empower the community and the nation for this is a part of its mission.
    </p>
</div>


