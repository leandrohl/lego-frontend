

import './styles.scss'

interface ItemMenuProps {
    href: string;
    icon: string;
    text: string;
    onClick: () => void;
}

const ItemMenu = ({href, icon, text, onClick}: ItemMenuProps ) => {
    return (
        <a href={href} className='item-menu' onClick={onClick}>
           <img src={icon} />
           <p> {text} </p>
        </a>
    )   
}

export default ItemMenu;