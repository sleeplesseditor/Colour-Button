import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App'

test('button has correct initial colour and updates when clicked', () => {
  render(<App />);
  const colourButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(colourButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  fireEvent.click(colourButton);

  expect(colourButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(colourButton).toHaveTextContent('Change to Medium Violet Red')
});

test('initial conditions', () => {
  render(<App />);

  const colourButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(colourButton).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const colourButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
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
  const colourButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable Button'});

  fireEvent.click(checkBox);
  expect(colourButton).toHaveStyle('background-color: gray');

  fireEvent.click(checkBox);
  expect(colourButton).toHaveStyle('background-color: MediumVioletRed');
});

test('clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);
  const colourButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable Button'});

  fireEvent.click(colourButton);
  fireEvent.click(checkBox);
  expect(colourButton).toHaveStyle('background-color: gray');

  fireEvent.click(checkBox);
  expect(colourButton).toHaveStyle('background-color: MidnightBlue');
});

describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});