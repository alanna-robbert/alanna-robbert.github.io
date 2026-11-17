import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('home page shows name and link to work', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Alanna Robbert' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'published work' })).toBeInTheDocument();
});

test('work page filters stories by topic and search', () => {
  window.location.hash = '#/work';
  render(<App />);
  expect(screen.getByText('24 pieces')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Transportation 1' }));
  expect(screen.getByText('Showing 1 of 24')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /RTS bus schedule/ })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Clear filters' }));
  fireEvent.change(screen.getByPlaceholderText(/Search stories/), { target: { value: 'lottery' } });
  expect(screen.getByText('Showing 1 of 24')).toBeInTheDocument();
});
