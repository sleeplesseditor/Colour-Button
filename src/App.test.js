import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial colour and updates when clicked', () => {
  render(<App />);
  const colourButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colourButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colourButton);

  expect(colourButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colourButton).toHaveTextContent('Change to red')
});

test('initial conditions', () => {
  render(<App />);

  const colourButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colourButton).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const colourButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable Button'});

  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(colourButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(colourButton).not.toBeDisabled();
});

test('disabled button has gray background and reverts to red', () => {
  render(<App />);
  const colourButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable Button'});

  fireEvent.click(checkBox);
  expect(colourButton).toHaveStyle('background-color: gray');

  fireEvent.click(checkBox);
  expect(colourButton).toHaveStyle('background-color: red');
});

test('clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);
  const colourButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable Button'});

  fireEvent.click(colourButton);
  fireEvent.click(checkBox);
  expect(colourButton).toHaveStyle('background-color: gray');

  fireEvent.click(checkBox);
  expect(colourButton).toHaveStyle('background-color: blue');
});