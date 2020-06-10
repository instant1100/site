import useHasData from '@/core/AppDB/hooks/useHasData';

const useAvailable = () => {
  return useHasData();
};

export default useAvailable;
