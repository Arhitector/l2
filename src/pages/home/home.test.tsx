import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import HomePage from './index';
import NotFoundPage from '../NotFoundPage/index';
import App from '../../components/App';

jest.mock('firebase/app');

test('invalid path should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/random' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(HomePage)).toHaveLength(0);
  expect(wrapper.find(NotFoundPage)).toHaveLength(1);
});

test('valid path should not redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(HomePage)).toHaveLength(1);
  expect(wrapper.find(NotFoundPage)).toHaveLength(0);
});