import Lego from '../../assets/images/lego.png'
import Categories from '../../assets/svg/icon-menu-web.svg'
import Mail from '../../assets/svg/mail.svg'
import Message from '../../assets/svg/message-circle.svg'
import Search from '../../assets/svg/search.svg'

import './styles.scss'

interface NavBarProps {
    openMenu: () => void;
}

const Navbar = ({ openMenu } : NavBarProps) => {
    return (
        <header className='header'>
            <div className='icon-menu'>
                <img src={Lego} alt='lego' height={48} width={48}/>
                <span onClick={openMenu}>
                    <img src={Categories} alt='categorias' />
                    <p> Categories </p>
                </span>
            </div>
            <nav>
                <ul className='nav-bar'>
                    <li> <a>Gifting</a> </li>
                    <li> <a>Travel</a> </li>
                    <li> <a>Adults Welcome</a> </li>
                    <li> <a>Art & Home Décor</a>  </li>
                    <li> <a>Space</a> </li>
                    <li> <a>Pop Culture</a> </li>
                    <li> <a>Toddlers</a> </li>
                    <li> <a>Real World Role Playing</a> </li>
                </ul>
            </nav>
            <div className='items-menu'>
                <span > 
                    <img src={Message} alt='mensagem'/>
                    <p>Contact Us</p>
                </span>
                <span >
                    <img src={Mail} alt='mensagem'/>
                    <p>Request</p>
                </span>
                <span >
                    <img src={Search} alt='mensagem'/>
                    <p>Search</p>
                </span>
            </div>
        </header>
    )   
}

export default Navbar;