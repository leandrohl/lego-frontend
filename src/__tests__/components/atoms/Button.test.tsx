import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../components/atoms/Button';

describe('Button', () => {
    test('renders children correctly', () => {
        render(<Button onClick={() => {}}>Click Me</Button>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    test('renders leftIcon when provided', () => {
        const leftIcon = 'left-icon.png';
        render(<Button onClick={() => {}} leftIcon={leftIcon}>Click Me</Button>);
        expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('src', leftIcon);
    });

    test('renders rightIcon when provided', () => {
        const rightIcon = 'right-icon.png';
        render(<Button onClick={() => {}} rightIcon={rightIcon}>Click Me</Button>);
        expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('src', rightIcon);
    });

    test('calls onClick handler when clicked', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Click Me</Button>);
        fireEvent.click(screen.getByText('Click Me'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('renders leftIcon and rightIcon when both are provided', () => {
        const leftIcon = 'left-icon.png';
        const rightIcon = 'right-icon.png';
        render(<Button onClick={() => {}} leftIcon={leftIcon} rightIcon={rightIcon}>Click Me</Button>);
        const images = screen.getAllByRole('img', { hidden: true });
        expect(images[0]).toHaveAttribute('src', leftIcon);
        expect(images[1]).toHaveAttribute('src', rightIcon);
    });
});
