import React, { useCallback } from 'react';

import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import PropTypes from 'prop-types';

import useLoadFormImage from '/core/components/ImageLoader/useLoadFormImage';
import { FileFieldProps } from '/core/forms/interfaces';

function MyFileField({ handleChange, name, oldImage }: FileFieldProps) {
  const onLoad = useCallback((file) => {
    handleChange({
      target: {
        value: file,
        name,
      },
    });
  }, [handleChange, name]);

  const [image, loadImage] = useLoadFormImage(onLoad);

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
MyFileField.defaultProps = {
  oldImage: null,
};

MyFileField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  oldImage: PropTypes.string,
};

export default React.memo(MyFileField);
