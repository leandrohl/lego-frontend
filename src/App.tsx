import { useState } from 'react';
import Banner from './components/organisms/Banner';
import Footer from './components/atoms/Footer';
import ListCards from './components/organisms/ListCards';
import Navbar from './components/organisms/Navbar';
import Menu from './components/organisms/Menu';

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(true)
  }

  const closeMenu = () => {
    setIsOpenMenu(false)
  }

  return (
    <div>
      <Menu isOpen={isOpenMenu} closeMenu={closeMenu}/>
      {!isOpenMenu && (
        <div>
          <Navbar openMenu={openMenu}/>
          <Banner />
          <ListCards />
          <Footer />
        </div>
      )}
    </div> 
  )
}

export default App
