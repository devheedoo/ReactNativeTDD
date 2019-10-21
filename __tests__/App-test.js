/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import expectExport from 'expect';

describe('Jest', () => {
  it('Is it working?', () => {
    const a = 1;
    expectExport(a + 1).toBe(2);
  });
});