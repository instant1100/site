import { useState } from 'react';

function useLoadFormImage(setFieldValue, name) {
  const [image, setImage] = useState(null);

  const loadImage = (e) => {
    const file = e.target.files[0];
    setFieldValue(name, file);
    const reader = new FileReader();

    if (file) {
      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  return [image, loadImage];
}

export default useLoadFormImage;
