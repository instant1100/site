import { FormEventHandler } from 'react';
import { EntityConfig } from '../../interfaces/interfaces';
import { AbstractEntity } from '../../../AppDB/interfaces';

export type DefaultFormViewProps = {
  handleChange: (e: any) => void,
  values: {[key: string]: string},
  handleSubmit: FormEventHandler<HTMLFormElement>,
  entityConfig: EntityConfig<AbstractEntity>,
}
