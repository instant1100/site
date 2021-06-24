import { FormEventHandler } from 'react';
import { AbstractEntity } from '@instant1100/store';

import { EntityConfig } from '../../interfaces/interfaces';

export type DefaultFormViewProps = {
  handleChange: (e: any) => void,
  values: {[key: string]: string},
  handleSubmit: FormEventHandler<HTMLFormElement>,
  entityConfig: EntityConfig<AbstractEntity>,
}
