import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';

import entityMap from '../entityMap';
import useDB from '/core/AppDB/hooks/useDB';
import { deleteEntity } from '/core/AppDB/MethodsDB';
import { AbstractEntity } from '/core/AppDB/interfaces';
import { EntityConfig } from '/core/forms/interfaces/interfaces';

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
