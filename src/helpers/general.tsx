import { useLayoutEffect, useRef } from "react";







export type Optional<Wrapped> = Wrapped | null;
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };


// makes specific properties optional
export type PartialBy<T, Keys extends keyof T> = Omit<T, Keys> & Partial<Pick<T, Keys>>

export const NASSAU_TIME_ZONE = 'America/Nassau';
export const BETTER_LIVING_APP_URL = 'https://betterlivingnassau.com';
// export const BETTER_LIVING_APP_URL = 'http://localhost:19006';

export function getNumbersList(first: number, last: number): number[] {
    if (first > last) { throw new Error("first cannot be greater than last!!"); }
    let numbers: number[] = [];
    for (let x = first; x <= last; x++) {
        numbers.push(x);
    }
    return numbers;
}


// // returns min if the number is less than or equal to min, returns max if the number is greater than or equal to max, otherwise returns the same number
// export function limitNumber(number: number, min: number, max: number): number {
//     return Math.max(Math.min(number, max), min);
// }



// export function lazilyImport<ModuleType, ImportedItem>(importCall: Promise<ModuleType>, elementGetter: (module: ModuleType) => ImportedItem): () => Optional<ImportedItem> {

//     const ref: { current: Optional<ImportedItem> } = {
//         current: null,
//     }

//     importCall.then(module => {
//         ref.current = elementGetter(module);
//     })

//     return () => {
//         return ref.current;
//     }

// }

// executes closure if value is not null or undefined and returns its result, otherwise returns null.
export function mapOptional<Unwrapped, ReturnVal>(optional: Unwrapped | undefined | null, action: (unwrapped: Unwrapped) => ReturnVal): ReturnVal | null {
    if (optional == null) {
        return null;
    } else {
        return action(optional);
    }
}

export function compactMap<InputType, OutputType>(items: Array<InputType>, transformer: (input: InputType, index: number) => OutputType | undefined | null) {
    const newItems: OutputType[] = [];
    for (let index=0; index < items.length; index++) {
        const result = transformer(items[index], index);
        result != null && newItems.push(result);
    }
    return newItems;
}

export function filterString(string: string, filterer: (char: string) => boolean){
    let resultString = '';
    for (let x=0; x<string.length; x++){
        if (filterer(string[x])){
            resultString += string[x];
        }
    }
    return resultString;
}


export function isDigit(string: string): boolean {
    const regex = /^\d$/;
    return regex.test(string);
}

// only starts triggering the effect after the first call
export const useUpdateLayoutEffect: typeof useLayoutEffect = (effect, deps) => {
    const isFirstRender = useRef(true);
    useLayoutEffect(() => {
        if (isFirstRender.current){
            isFirstRender.current = false;
        } else {
            return effect();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
}

export function isValidEmail(email: string){
    // I got this regex from here: https://emailregex.com/
    //eslint-disable-next-line no-control-regex
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    return emailRegex.test(email);
}

// /** filters out any properties whose key is not in the included props array and whose value is not equal to undefiend*/
// export function getPropsFromObject<ObjType extends object>(obj: ObjType, includedProps: (keyof ObjType)[]) {
//     const resultObj: Partial<ObjType> = {};
//     for (const key of includedProps) {
//         const value = obj[key];
//         if (value === undefined) { continue; }
//         resultObj[key] = value;
//     }
//     return resultObj;
// }



// export function caseInsensitiveStringSort<ItemT>(...args: ItemT extends string ? [] : [(item: ItemT) => string]): (item1: ItemT, item2: ItemT) => number {
//     return (item1, item2) => {
//         const item1String = ((typeof item1 === 'string') ? item1 : args[0]?.(item1));
//         const item2String = ((typeof item2 === 'string') ? item2 : args[0]?.(item2));
//         if (typeof item1String !== 'string' || typeof item2String !== 'string') {
//             throw new Error('caseInsensitiveStringSort could not produce sort value');
//         }
//         return item1String.toLowerCase().localeCompare(item2String.toLowerCase());
//     }
// }

