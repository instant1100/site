import * as React from 'react';
import { render } from '@testing-library/react';

import { Sum } from './componentFunction';

test('adds 1 + 2 to equal 3', () => {
  const { getByText } = render(<Sum a={1} b={2} />);

  expect(getByText(3)).toBeTruthy();
});
