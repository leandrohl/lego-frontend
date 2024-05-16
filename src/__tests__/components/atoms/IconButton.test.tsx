import { render, screen, fireEvent } from '@testing-library/react';
import IconButton from '../../../components/atoms/IconButton';

describe('IconButton', () => {
    test('renders the button with the provided icon', () => {
        const icon = 'icon.png';
        render(<IconButton icon={icon} onClick={() => {}} />);
        expect(screen.getByRole('img')).toHaveAttribute('src', icon);
    });

    test('applies the default size class when no size is provided', () => {
        render(<IconButton icon="icon.png" onClick={() => {}} />);
        expect(screen.getByRole('button')).toHaveClass('small');
    });

    test('applies the large size class when size is set to large', () => {
        render(<IconButton size="large" icon="icon.png" onClick={() => {}} />);
        expect(screen.getByRole('button')).toHaveClass('large');
    });

    test('calls onClick handler when clicked', () => {
        const onClick = jest.fn();
        render(<IconButton icon="icon.png" onClick={onClick} />);
        fireEvent.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
