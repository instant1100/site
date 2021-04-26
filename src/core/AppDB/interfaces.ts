export type EntityName = string;

export interface AbstractEntity {
    id: string,
    [key: string]: any;
}

export type EntityMap = {
    [key: string]: AbstractEntity[];
};
