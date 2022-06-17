import { render, screen, fireEvent } from '@testing-library/react';
import Index from './Index';

describe("<App />", () => {

  test('display counter text', () => {
    render(<App />);

    expect(screen.getByTestId("counter-text")).toHaveTextContent("0");
  });

  test('increment counter', () => {
    render(<App />);

    const btnIncrement = screen.getByTestId("btn-increment");
    fireEvent.click(btnIncrement);

    expect(screen.getByTestId("counter-text")).toHaveTextContent("1");
  });

  test('decrement counter', () => {
    render(<App />);

    const btnDecrement = screen.getByTestId("btn-decrement");
    fireEvent.click(btnDecrement);

    expect(screen.getByTestId("counter-text")).toHaveTextContent("-1");
  });

});