import { FormEventHandler } from 'react';
import { EntityConfig } from '/core/forms/interfaces/interfaces';
import { AbstractEntity } from '/core/AppDB/interfaces';

export type DefaultFormViewProps = {
  handleChange: (e: any) => void,
  values: {[key: string]: string},
  handleSubmit: FormEventHandler<HTMLFormElement>,
  entityConfig: EntityConfig<AbstractEntity>,
}
