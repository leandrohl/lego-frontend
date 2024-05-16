import Lego from '../../assets/images/lego.png'
import CloseIcon from '../../assets/svg/close.svg'
import ItemMenu from '../ItemMenu';
import HomeIcon from '../../assets/svg/home.svg'
import MessageCircle from '../../assets/svg/message-circle.svg'
import ShoppingBag from '../../assets/svg/shoppingbag.svg'

import './styles.scss'
import { menu } from '../../data/menu';
import CardMenu from '../CardMenu';

interface MenuProps {
    isOpen: boolean;
    closeMenu: () => void;
}

const Menu = ({isOpen, closeMenu}: MenuProps ) => {
    return (
        <div className={`menu-container ${isOpen ? 'open' : 'closed'}`}>
           <div className='menu-first'>
                <div>
                    <div className='header-menu'>
                        <img src={Lego} alt='lego' height={48} width={48}/>
                        <button onClick={closeMenu}><img src={CloseIcon} /></button>
                    </div>
                    <ItemMenu icon={HomeIcon} text='Home'/>
                    <ItemMenu icon={ShoppingBag} text='Requests'/>
                    <ItemMenu icon={MessageCircle} text='Contact us'/>
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