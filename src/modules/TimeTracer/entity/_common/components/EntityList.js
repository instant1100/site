import React from 'react';

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
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import entityMap from '@/modules/TimeTracer/entity/entityMap';
import useDB from '@/core/AppDB/hooks/useDB';
import {deleteEntity} from '@/core/AppDB/MethodsDB';

const EntityList = ({entityName, title}) => {
  const data = useDB()[entityName] || [];

  const {t} = useTranslation();

  return (
    <List>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {data.map((entity) =>
        <ListItem key={entity.id}>
          <Link
            color="inherit"
            variant="body2"
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
        </ListItem>,
      )}
    </List>
  )
};

export default EntityList;
