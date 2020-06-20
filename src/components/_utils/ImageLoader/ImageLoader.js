import React from 'react';

import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import useLoadFormImage from '@/components/_utils/ImageLoader/useLoadFormImage';
import PropTypes from 'prop-types';

function ImageLoader({ setFieldValue, name, oldImage }) {
  const [image, loadImage] = useLoadFormImage(setFieldValue, name);

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
}
ImageLoader.defaultProps = {
  oldImage: null,
};

ImageLoader.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  oldImage: PropTypes.string,
};

export default React.memo(ImageLoader);
