import { ChangeEventHandler } from 'react';
import { AbstractEntity } from '/core/AppDB/interfaces';
import { FieldConfig } from '/core/forms/interfaces/fields';

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

export type EntityConfig<T extends AbstractEntity> = {
    fields: FieldConfig[],
    titles: {
        getEntityTitle: (entity: T) => string,
        entitiesTitle: string,
        edit: string,
        new:string,
    }
}

export type FormProps<T extends AbstractEntity> = {
    entityConfig: EntityConfig<T>,
    ViewComponent: any,
    handleSubmit: (values: ValueMap) => Promise<boolean>,
}

export type ValueMap = {
    [key: string]: any,
}
