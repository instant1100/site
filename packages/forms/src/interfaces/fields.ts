export enum FIELD_TYPES {
  ID = 'FIELD_ID',
  TEXT = 'FIELD_TEXT',
  SELECT = 'FIELD_SELECT',
  IMAGE = 'FIELD_IMAGE',
}

export interface BaseFieldConfig {
  type: FIELD_TYPES,
  name: string,
  defaultValue?: any,
}

export interface FieldIDConfig extends BaseFieldConfig {
  type: FIELD_TYPES.ID,
  name: 'id',
  defaultValue?: string,
}

export interface FieldTextConfig extends BaseFieldConfig {
  type: FIELD_TYPES.TEXT,
  name: string,
  label: string,
  required?: boolean,
  defaultValue?: string,
}

export interface FieldSelectConfig extends BaseFieldConfig {
  type: FIELD_TYPES.SELECT,
  name: string,
  values: any[],
  label: string,
  required?: boolean,
  defaultValue?: [],
}

export interface FieldImage extends BaseFieldConfig {
  type: FIELD_TYPES.IMAGE,
  name: string,
  label: string,
  required?: boolean,
  defaultValue?: string,
}

export type FieldConfig = FieldIDConfig | FieldTextConfig | FieldSelectConfig | FieldImage;
