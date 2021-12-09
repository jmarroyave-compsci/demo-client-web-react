import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import { itMustHaveNoErrors, TestProvider } from "tests/jest/shared"

import itemState from './automata/tests/item.json'
import TestComponent from '.';
import config from './.config';

describe(`${config.automata.name.toUpperCase()}`, () => {
  beforeEach(() => { 
  }); 
 
  it('compare Page against snapshot', () => {
    const renderer = render(
      <TestProvider query="movies_decades" namespace={config.automata.name} state={itemState}>
        <TestComponent render="list"/>
      </TestProvider>
    )

    itMustHaveNoErrors(renderer)
    expect(renderer.container).toMatchSnapshot();
  });
});
