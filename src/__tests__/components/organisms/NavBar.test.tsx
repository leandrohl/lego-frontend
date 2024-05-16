import { render, fireEvent } from '@testing-library/react';
import Navbar from '@components/organisms/Navbar';

describe('Navbar component', () => {
  test('renders navbar with correct elements', () => {
    const openMenuMock = jest.fn(); 

    const { getByAltText, getByText } = render(<Navbar openMenu={openMenuMock} />);

    const legoIconElement = getByAltText('lego');
    expect(legoIconElement).toBeInTheDocument();

    const categoriesIconElement = getByAltText('categorias');
    expect(categoriesIconElement).toBeInTheDocument();

    const contactUsElement = getByText('Contact Us');
    expect(contactUsElement).toBeInTheDocument();

    const requestElement = getByText('Request');
    expect(requestElement).toBeInTheDocument();

    const searchElement = getByText('Search');
    expect(searchElement).toBeInTheDocument();
  });

  test('calls openMenu function when categories icon is clicked', () => {
    const openMenuMock = jest.fn(); 

    const { getByAltText } = render(<Navbar openMenu={openMenuMock} />);

    const categoriesIconElement = getByAltText('categorias');
    fireEvent.click(categoriesIconElement); 

    expect(openMenuMock).toHaveBeenCalled(); 
  });
});
