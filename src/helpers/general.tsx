






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


// returns min if the number is less than or equal to min, returns max if the number is greater than or equal to max, otherwise returns the same number
export function limitNumber(number: number, min: number, max: number): number {
    return Math.max(Math.min(number, max), min);
}



export function lazilyImport<ModuleType, ImportedItem>(importCall: Promise<ModuleType>, elementGetter: (module: ModuleType) => ImportedItem): () => Optional<ImportedItem> {

    const ref: { current: Optional<ImportedItem> } = {
        current: null,
    }

    importCall.then(module => {
        ref.current = elementGetter(module);
    })

    return () => {
        return ref.current;
    }

}

// executes closure if value is not null or undefined and returns its result, otherwise returns null.
export function mapOptional<Unwrapped, ReturnVal>(optional: Unwrapped | undefined | null, action: (unwrapped: Unwrapped) => ReturnVal): ReturnVal | null {
    if (optional == null) {
        return null;
    } else {
        return action(optional);
    }
}

export function compactMap<InputType, OutputType>(items: Array<InputType>, transformer: (input: InputType) => OutputType | undefined | null) {
    const newItems: OutputType[] = [];
    for (const item of items) {
        const result = transformer(item);
        result != null && newItems.push(result);
    }
    return newItems;
}


export function isDigit(string: string): boolean {
    const regex = /^\d$/;
    return regex.test(string);
}




/** filters out any properties whose key is not in the included props array and whose value is not equal to undefiend*/
export function getPropsFromObject<ObjType extends object>(obj: ObjType, includedProps: (keyof ObjType)[]) {
    const resultObj: Partial<ObjType> = {};
    for (const key of includedProps) {
        const value = obj[key];
        if (value === undefined) { continue; }
        resultObj[key] = value;
    }
    return resultObj;
}



export function caseInsensitiveStringSort<ItemT>(...args: ItemT extends string ? [] : [(item: ItemT) => string]): (item1: ItemT, item2: ItemT) => number {
    return (item1, item2) => {
        const item1String = ((typeof item1 === 'string') ? item1 : args[0]?.(item1));
        const item2String = ((typeof item2 === 'string') ? item2 : args[0]?.(item2));
        if (typeof item1String !== 'string' || typeof item2String !== 'string') {
            throw new Error('caseInsensitiveStringSort could not produce sort value');
        }
        return item1String.toLowerCase().localeCompare(item2String.toLowerCase());
    }
}

