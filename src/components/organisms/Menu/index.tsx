import Lego from '@assets/images/lego.png'
import CloseIcon from '@assets/svg/close.svg'
import ItemMenu from '@components/molecules/ItemMenu';
import HomeIcon from '@assets/svg/home.svg'
import MessageCircle from '@assets/svg/message-circle.svg'
import ShoppingBag from '@assets/svg/shoppingbag.svg'

import './styles.scss'
import { menu } from '@data/menu';
import CardMenu from '@components/molecules/CardMenu';

interface MenuProps {
    isOpen: boolean;
    closeMenu: () => void;
}

const Menu = ({isOpen, closeMenu}: MenuProps ) => {
    return (
        <div className={`menu-container ${isOpen ? 'open' : 'closed'}`} role='menu'>
           <div className='menu-first'>
                <div>
                    <div className='header-menu'>
                        <img src={Lego} alt='lego' height={48} width={48}/>
                        <button onClick={closeMenu} role='close-icon'><img src={CloseIcon} /></button>
                    </div>
                    <ItemMenu href='#banner' onClick={closeMenu} icon={HomeIcon} text='Home'/>
                    <ItemMenu href='' onClick={closeMenu} icon={ShoppingBag} text='Requests'/>
                    <ItemMenu href='' onClick={closeMenu} icon={MessageCircle} text='Contact us'/>
                </div>
                <div className='themes'>
                    <span/>
                    <p> Themes </p>
                </div> 
                <nav>
                    <ul className='nav-menu'>
                        <li> <a href='#gifting' onClick={closeMenu}>Gifting</a> </li>
                        <li> <a href='#travel' onClick={closeMenu}>Travel</a> </li>
                        <li> <a href='#adults-welcome' onClick={closeMenu}>Adults Welcome</a> </li>
                        <li> <a href='#art-home' onClick={closeMenu}>Art & Home Décor</a>  </li>
                        <li> <a href='#space' onClick={closeMenu}>Space</a> </li>
                        <li> <a href='#pop-culture' onClick={closeMenu}>Pop Culture</a> </li>
                        <li> <a href='#toddlers' onClick={closeMenu}>Toddlers</a> </li>
                        <li> <a href='#real-world' onClick={closeMenu}>Real World Role Playing</a> </li>
                    </ul>
                </nav>
           </div>
           <div className='menu-second'>
                { menu.map( item => 
                    <CardMenu 
                        key={item.id} 
                        image={{ src: item.url, alt: item.name}}
                    />
                )}
           </div>
        </div>
    )   
}

export default Menu;