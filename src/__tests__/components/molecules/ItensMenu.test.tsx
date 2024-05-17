import { render } from '@testing-library/react';
import ItemMenu from '@components/molecules/ItemMenu';

describe('ItemMenu component', () => {
  test('renders with correct icon and text', () => {
    const testIcon = 'icon.svg';
    const testText = 'Test Text';

    const { getByText, getByRole } = render(
      <ItemMenu 
        href='' 
        onClick={jest.fn()} 
        icon={testIcon} 
        text={testText} 
      />
    );

    const textElement = getByText(testText);
    const iconElement = getByRole('img');

    expect(textElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('src', testIcon);
  });
});
