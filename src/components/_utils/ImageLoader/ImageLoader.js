import React from 'react';

import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import useLoadFormImage from '@/components/_utils/ImageLoader/useLoadFormImage';

function ImageLoader({ setFieldValue, name }) {
  const [image, loadImage] = useLoadFormImage(setFieldValue, name);

  return (
    <label>
      <ListItem button>
        <ListItemText primary="Загрузить изображение" />
      </ListItem>
      <input style={{display: 'none'}} name="image" type="file" onChange={loadImage} />
      {image && (
        <>
          <img src={image} width="100%"/>
        </>
      )}
    </label>
  )
}

export default React.memo(ImageLoader);
