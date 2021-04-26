import { ChangeEventHandler, FormEventHandler } from 'react';

export type FieldProps = {
    value: string,
    name: string,
    label: string,
    handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
    required: boolean,
}

export type FileFieldProps = {
    handleChange: any,
    name: string,
    oldImage: string,
}

export type SelectFieldProps = {
    value: string,
    name: string,
    label: string,
    handleChange: any,
    values: string[],
}

export type DefaultFormViewProps = {
    config: string[],
    handleChange: (e: any) => void,
    title: {
        edit: string,
        new: string,
    },
    values: {[key: string]: string},
    handleSubmit: FormEventHandler<HTMLFormElement>,
}

// eslint-disable-next-line no-shadow
export enum FIELD_TYPES {
    ID = 'FIELD_ID',
    TEXT = 'FIELD_TEXT',
    SELECT = 'FIELD_SELECT',
    IMAGE = 'FIELD_IMAGE',
}

export type EntityConfig = {
    name: string,
    type: FIELD_TYPES,
}

export type FormProps = {
    formConfig: EntityConfig[],
    ViewComponent: any,
}

export type ValueMap = {
    [key: string]: any,
}
