import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
  test('test render', () => {
    render(<Button className="test">test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('test clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
    screen.debug();
  });
})