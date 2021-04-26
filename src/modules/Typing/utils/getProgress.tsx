import getWeeksCount from '$Typing/utils/getWeeksCount';

const getProgress = (start: number, end: number) => {
  const now = Date.now();
  const fullWeeks = getWeeksCount(end - start);
  const passedWeeks = getWeeksCount(now - start);

  return {
    fullWeeks,
    passedWeeks,
  };
};

export default getProgress;
