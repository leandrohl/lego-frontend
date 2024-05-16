import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ListCards from './components/ListCards';
import Navbar from './components/Navbar';
import Menu from './components/Menu';

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
