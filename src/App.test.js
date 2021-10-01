import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "mon site"', () => {
  render(<App />);
  const linkElement = screen.getByText(/mon site/i);
  expect(linkElement).toBeInTheDocument();
});
