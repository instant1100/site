const getConfig = () => {
  const liveStart = new Date(1988, 11, 10);

  const newLiveStart = new Date(2020, 12, 28);

  const live = 50;
  const end = new Date(liveStart.getFullYear() + live, liveStart.getMonth(), liveStart.getDay());

  const amazon = 35;
  const amazonEnd = new Date(
    liveStart.getFullYear() + amazon,
    liveStart.getMonth(), liveStart.getDay(),
  );

  return [
    {
      label: 'rest_live',
      start: liveStart,
      end,
    },
    {
      label: 'new_rest_live',
      start: newLiveStart,
      end,
    },
    {
      label: 'amazon',
      start: liveStart,
      end: amazonEnd,
    },
    {
      label: 'new_live_amazon',
      start: newLiveStart,
      end: amazonEnd,
    },
  ];
};

export default getConfig;
