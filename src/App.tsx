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

  if (isOpenMenu) return (<Menu closeMenu={closeMenu}/>)

  return (
    <div>
      <Navbar openMenu={openMenu}/>
      <Banner />
      <ListCards />
      <Footer />
    </div> 
  )
}

export default App
