import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from './test-utils';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bem vindo!/i);
  expect(linkElement).toBeInTheDocument()

});
