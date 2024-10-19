import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'; // Cambia la fuente de `screen`
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
