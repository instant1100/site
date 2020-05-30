import useHasData from '@/core/AppDB/hooks/useHasData';

const useAvailable = () => {
  console.log(useHasData());
  return useHasData();
};

export default useAvailable;
