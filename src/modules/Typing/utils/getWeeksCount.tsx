const getWeeksCount = (time: number) => {
  return time / (1000 * 60 * 60 * 24 * 7);
};

export default getWeeksCount;
