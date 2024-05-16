import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('render App', () => {
    render(<App />);
  });

  test('calls openMenu function when categories menu is clicked', () => {
    const { getByAltText, getByRole } = render(<App />);

    const categoriesIconElement = getByAltText('categorias');
    fireEvent.click(categoriesIconElement); 

    expect(getByRole('menu')).toBeDefined(); 
  });

  test('calls closeMenu function when close icon is clicked', () => {
    const {  getByRole } = render(<App />);

    const closeIcon = getByRole('close-icon');
    fireEvent.click(closeIcon); 

    expect(closeIcon).toBeDefined(); 
  });
});
