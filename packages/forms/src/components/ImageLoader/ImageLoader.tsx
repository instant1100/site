import React, { FC } from 'react';

import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';

import useLoadFormImage from './useLoadFormImage';
import { ImageLoaderProps } from './interfaces';

const ImageLoader: FC<ImageLoaderProps> = ({ setFieldValue, oldImage }) => {
  const [image, loadImage] = useLoadFormImage(setFieldValue);

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <input style={{ display: 'none' }} name="image" type="file" onChange={loadImage} />
      <ListItem button>
        <ListItemText primary="Загрузить изображение" />
      </ListItem>
      {image && <img src={image} width="100%" alt="" />}
      {!image && oldImage && <img src={oldImage} width="100%" alt="" />}
    </label>
  );
};

ImageLoader.defaultProps = {
  oldImage: null,
};

export default React.memo(ImageLoader);
