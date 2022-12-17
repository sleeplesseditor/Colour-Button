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
