import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders input, buttons, and list', () => {
    render(<App />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    const addButton = screen.getByText(/add/i);
    const clearButton = screen.getByText(/clear/i);
    expect(addButton).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();

    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('adds an item to the list', () => {
    render(<App />);

    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByText(/add/i);

    fireEvent.change(inputElement, { target: { value: 'Test Item' } });

    fireEvent.click(addButton);

    const listItem = screen.getByText('Test Item');
    expect(listItem).toBeInTheDocument();
  });

  test('clears the list', () => {
    render(<App />);

    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByText(/add/i);
    const clearButton = screen.getByText(/clear/i);

    fireEvent.change(inputElement, { target: { value: 'Test Item' } });
    fireEvent.click(addButton);

    const listItem = screen.getByText('Test Item');
    expect(listItem).toBeInTheDocument();

    fireEvent.click(clearButton);

    const listElement = screen.getByRole('list');
    expect(listElement).toBeEmptyDOMElement();
  });

  test('does not add an empty item', () => {
    render(<App />);

    const addButton = screen.getByText(/add/i);

    fireEvent.click(addButton);

    const listElement = screen.getByRole('list');
    expect(listElement).toBeEmptyDOMElement();
  });
});
