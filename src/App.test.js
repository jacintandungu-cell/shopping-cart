import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Cart heading', () => {
  render(<App />);
  const cartHeading = screen.getByText(/Cart 🛒/i);
  expect(cartHeading).toBeInTheDocument();
});

test('shows empty cart message initially', () => {
  render(<App />);
  const emptyMessage = screen.getByText(/Your cart is empty/i);
  expect(emptyMessage).toBeInTheDocument();
});

test('adds item to cart when button clicked', () => {
  render(<App />);
  const addButtons = screen.getAllByText(/Add to Cart ➕/i);
  fireEvent.click(addButtons[0]); // click Apples 🍎
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

test('toggles dark mode when button clicked', () => {
  render(<App />);
  const toggleButton = screen.getByText(/Switch to Dark Mode/i);
  fireEvent.click(toggleButton);
  const appDiv = screen.getByText(/Dynamic Shopping App/i).closest('div');
  expect(appDiv).toHaveClass('dark');
});
