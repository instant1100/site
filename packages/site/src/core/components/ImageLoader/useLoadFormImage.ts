import { FormEvent, useState } from 'react';
import { OnLoadCallback } from './interfaces';

function useLoadFormImage(onLoad: OnLoadCallback) {
  const [image, setImage] = useState(null);

  const loadImage = (e: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    const file = e.target.files[0];
    onLoad(file);
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
