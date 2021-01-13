import * as React from 'react';
import { render } from '@testing-library/react';

import { Sum } from '../componentFunction/componentFunction';
import { DefaultSum } from './componentComposition';

jest.mock('../componentFunction/componentFunction', () => {
  return {
    Sum: jest.fn().mockImplementation(() => {
      return null;
    }),
  };
});

test('adds 1 + 2 to equal 3', () => {
  render(<DefaultSum />);

  expect(Sum).toBeCalledWith({ a: 10, b: 20 }, expect.anything());
});
