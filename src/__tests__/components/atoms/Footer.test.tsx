import { render, screen } from '@testing-library/react';
import Footer from '../../../components/atoms/Footer';

describe('Footer', () => {
    test('renders the footer text correctly', () => {
        render(<Footer />);
        expect(screen.getByText(/LEGO, the LEGO logo and the Brick and Knob configurations are trademarks of the LEGO Group. ©2022 The LEGO Group./i)).toBeInTheDocument();
    });
});
