import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDB, deleteEntity, AbstractEntity } from '@instant1100/store';
import { EntityConfig } from '@instant1100/forms';

import {
  ListItemText, List, ListItem, ListItemSecondaryAction,
  IconButton, DeleteIcon, Typography, ListItemAvatar, Avatar, EditIcon,
} from '@instant1100/ui-kit';

import entityMap from '../entityMap';

type EntityListProps = {
    entityName: string,
}

type EntityRowProps = {
  entityName: string,
  entity: AbstractEntity,
}

const EntityRow:FC<EntityRowProps> = ({ entity, entityName }) => {
  const { t } = useTranslation();
  // @ts-ignore
  const config = entityMap[entityName] as EntityConfig<AbstractEntity>;
  const title = config.titles.getEntityTitle(entity);

  return (
    <ListItem key={entity.id}>
      <Link
        color="inherit"
        to={`/time_tracer/${entityName}/${entity.id}`}
      >
        <ListItemAvatar>
          <Avatar>
            <EditIcon />
          </Avatar>
        </ListItemAvatar>
      </Link>
      <ListItemText
        primary={t(title)}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => deleteEntity(entityName, entity.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const EntityList:FC<EntityListProps> = ({ entityName }) => {
  const data: AbstractEntity[] = useDB(entityName);
  const { t } = useTranslation();
  // @ts-ignore
  const config = entityMap[entityName] as EntityConfig<AbstractEntity>;

  return (
    <List>
      <Typography variant="h6" gutterBottom>
        {t(config.titles.entitiesTitle)}
      </Typography>
      {data.map((entity) => (
        <EntityRow key={entity.id} entity={entity} entityName={entityName} />
      ))}
    </List>
  );
};

export default EntityList;
