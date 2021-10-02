import React from 'react';
import renderer from 'react-test-renderer';

import Banner from './banner'
import mockupData from 'res/mockup-data/stories/awards/data.json'

import Error from 'core/components/error'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, render, mount } from 'enzyme';

import { BrowserRouter as Router } from 'react-router-dom';


describe('Home page', () => {
  it('error in components?', () => {
    const wrapper = mount(
    <Router> 
      <Banner data={mockupData} />
    </Router>

    );
    expect(wrapper.find(Error)).toEqual(0);
  });
})