// 6. Choose Type
// Your task is to implement a generic mapped type Choose - extracts a subtype from a provided type. The type should
// have 2 generic parameters:
// • T – the type to get the keys from
// • K – a type representing the keys to extract from T
// Hint: You can create mapped type by iterating one set of keys but getting the types for the keys from somewhere
// else. Type constraints can help you ensure these keys exist in the target type.

type Choose<T, K extends keyof T> = {
    [Key in K]: T[Key];
}

type test = {
    name: string,
    age: number,
    test: () => string;
}

type extracted = Choose<test, 'name' | 'age'>   