import React, { FC } from 'react';

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
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import entityMap, { allEntities } from '@/modules/TimeTracer/entity/entityMap';
import useDB from '/core/AppDB/hooks/useDB';
import { deleteEntity } from '/core/AppDB/MethodsDB';
import PropTypes from 'prop-types';
import { AbstractEntity, EntityName } from '/core/AppDB/interfaces';

type EntityListProps = {
    entityName: EntityName,
    title: string,
}

const EntityList:FC<EntityListProps> = ({ entityName, title }) => {
  const data: AbstractEntity[] = useDB(entityName);
  const { t } = useTranslation();

  return (
    <List>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {data.map((entity) => (
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
            primary={entityMap[entityName].getTitle(entity, t)}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteEntity(entityName, entity.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

EntityList.defaultProps = {
  title: null,
};

EntityList.propTypes = {
  entityName: PropTypes.oneOf(allEntities).isRequired,
  title: PropTypes.string,
};

export default EntityList;
