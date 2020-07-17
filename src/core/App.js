import React, { useState, useCallback, useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppRouter from '@/core/AppRouter';
import AppProviderDB from '@/core/AppDB/AppProviderDB';
import SliderInput3 from '@/sand/src/slider-input3';
import { defaultDaysRange } from '@/sand/src';

const App = () => {
  const [a, setA] = useState(false);
  const [value, setValue] = useState(600);
  const range = a ? {minTerm: 100, maxTerm: 400} : { minTerm: 200, maxTerm: 600};

  const log = useCallback((n) => {
      setValue(n.value);
  }, []);

  console.log(value);

  return (
    <>
      <CssBaseline />
      <div onClick={() => setA(!a)}>1111</div>
      <SliderInput3
        onChange={log}
        value={value}
        min={range.minTerm}
        max={range.maxTerm}
        width={296}
        range={defaultDaysRange}
      />
    </>
  );
};

export default App;
