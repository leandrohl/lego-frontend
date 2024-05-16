import { render } from '@testing-library/react';
import CardMenu from '../../../components/molecules/CardMenu';

describe('CardMenu component', () => {
  test('renders with correct image source and alt text', () => {
    const testImage = {
      src: 'test-image.jpg',
      alt: 'Test Image',
    };

    const { getByAltText } = render(<CardMenu image={testImage} />);

    const imageElement = getByAltText(testImage.alt);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', testImage.src);
  });
});
