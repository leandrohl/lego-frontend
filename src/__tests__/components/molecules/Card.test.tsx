import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../../../components/molecules/Card';

describe('Card Component', () => {
    const mockViewDetails = jest.fn();
    const defaultProps = {
        type: 'primary' as const,
        title: 'Test Title',
        description: 'Test Description',
        image: {
            src: 'test-image.jpg',
            alt: 'Test Image'
        },
        viewDetails: mockViewDetails
    };

    test('renders the card with title, description, and image', () => {
        render(<Card {...defaultProps} />);
        
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
        expect(screen.getByAltText('Test Image')).toHaveAttribute('src', 'test-image.jpg');
    });

    test('applies the correct type class', () => {
        render(<Card {...defaultProps} />);
        
        const cardElement = screen.getByText('Test Title').closest('.card');
        expect(cardElement).toHaveClass('primary');
    });

    test('calls viewDetails handler when the button is clicked', () => {
        render(<Card {...defaultProps} />);
        
        const button = screen.getByRole('button', { name: /view details/i });
        fireEvent.click(button);
        
        expect(mockViewDetails).toHaveBeenCalledTimes(1);
    });
});
