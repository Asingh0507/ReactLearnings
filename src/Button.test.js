import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for extra matchers like 'toBeInTheDocument'
import Button from './Button';

test('renders the Button component', () => {
  render(<Button label="Click Me" />);

  // Check if the button is rendered with the right label
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick when button is clicked', () => {
  const onClick = jest.fn();
  render(<Button label="Click Me" onClick={onClick} />);

  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);

  // Check if onClick was called
  expect(onClick).toHaveBeenCalledTimes(1);
});
