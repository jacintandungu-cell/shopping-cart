import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Cart heading', () => {
  render(<App />);
  const cartHeading = screen.getByText(/Cart 🛒/i);
  expect(cartHeading).toBeInTheDocument();
});

test('adds item to cart when button clicked', () => {
  render(<App />);
  const addButtons = screen.getAllByText(/Add to Cart ➕/i);
  fireEvent.click(addButtons[0]); 
  const cartHeading = screen.getByText(/Cart 🛒 \(1\)/i);
  expect(cartHeading).toBeInTheDocument();
});

test('filters items by category', () => {
  render(<App />);
  const filterSelect = screen.getByRole('combobox');
  fireEvent.change(filterSelect, { target: { value: 'Fruits' } });
  const fruitItem = screen.getByText(/Apples/i);
  expect(fruitItem).toBeInTheDocument();
});
