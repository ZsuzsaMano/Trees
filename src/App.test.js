import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main title', () => {
  render(<App />);
  const headerElement = screen.getByText("Tree Showcase");
  expect(headerElement).toBeInTheDocument();
});
