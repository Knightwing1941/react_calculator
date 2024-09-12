import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { ACTIONS } from './App';

describe('Calculator', () => {
  test('renders calculator buttons', () => {
    render(<App />);

    expect(screen.getByText(/AC/i)).toBeInTheDocument();
    expect(screen.getByText(/DEL/i)).toBeInTheDocument();
    expect(screen.getByText(/÷/i)).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByText(/-/i)).toBeInTheDocument();
    expect(screen.getByText('.')).toBeInTheDocument();
    expect(screen.getByText(/=/i)).toBeInTheDocument();
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
    expect(screen.getByText(/4/i)).toBeInTheDocument();
    expect(screen.getByText(/5/i)).toBeInTheDocument();
    expect(screen.getByText(/6/i)).toBeInTheDocument();
    expect(screen.getByText(/7/i)).toBeInTheDocument();
    expect(screen.getByText(/8/i)).toBeInTheDocument();
    expect(screen.getByText(/9/i)).toBeInTheDocument();
    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });

  test('displays digits and operations correctly', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('one'));
    fireEvent.click(screen.getByTestId('two'));
    fireEvent.click(screen.getByTestId('addition'));
    fireEvent.click(screen.getByTestId('three'));
    fireEvent.click(screen.getByText(/=/i));

    expect(screen.getByTestId('current-operand')).toHaveTextContent("15");
  });

  test('performs addition correctly', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('one'));
    fireEvent.click(screen.getByTestId('addition'));
    fireEvent.click(screen.getByTestId('two'));
    fireEvent.click(screen.getByText(/=/i));

    expect(screen.getByTestId('current-operand')).toHaveTextContent("3");
  });

  test('performs subtraction correctly', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('five'));
    fireEvent.click(screen.getByTestId('subtraction'));
    fireEvent.click(screen.getByTestId('two'));
    fireEvent.click(screen.getByText(/=/i));

    expect(screen.getByTestId('current-operand')).toHaveTextContent("3");
  });

  test('performs multiplication correctly', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('five'));
    fireEvent.click(screen.getByTestId('multiplication'));
    fireEvent.click(screen.getByTestId('two'));
    fireEvent.click(screen.getByText(/=/i));

    expect(screen.getByTestId('current-operand')).toHaveTextContent("10");
  });

  test('performs division correctly', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('six'));
    fireEvent.click(screen.getByTestId('division'));
    fireEvent.click(screen.getByTestId('two'));
    fireEvent.click(screen.getByText(/=/i));

    expect(screen.getByTestId('current-operand')).toHaveTextContent("3");
  });

  test('clears the input', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('one'));
    fireEvent.click(screen.getByTestId('two'));
    fireEvent.click(screen.getByTestId('three'));
    fireEvent.click(screen.getByTestId('four'));
    fireEvent.click(screen.getByText(/AC/i));

    expect(screen.getByTestId('current-operand')).toHaveTextContent("");
  });

  test('deletes the last digit', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('one'));
    fireEvent.click(screen.getByTestId('two'));
    fireEvent.click(screen.getByText(/DEL/i));

    expect(screen.getByTestId('current-operand')).toHaveTextContent("1");
  });
});
