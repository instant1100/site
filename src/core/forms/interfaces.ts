import {ChangeEventHandler, FormEventHandler} from 'react';

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