import { useHasData } from '@instant1100/store';

const useAvailable = () => {
  return useHasData();
};

export default useAvailable;
