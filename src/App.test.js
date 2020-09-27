import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title Interactive Bar Chart', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Interactive Bar Chart/i);
  expect(linkElement).toBeInTheDocument();
});
