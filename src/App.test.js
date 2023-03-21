import { fireEvent, render, screen  } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

  render(<App />);
  const linkElement = screen.getByText(/User Types/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App', () => {
  it('should select the option when clicked', () => {
    render(<App />);

    const option2 = screen.getByLabelText('MANAGER');
    fireEvent.click(option2);

    const selectedOption = screen.getByText('MANAGER');
    expect(selectedOption).toBeInTheDocument();
  });
});