

import './styles.scss'

interface ItemMenuProps {
    icon: string;
    text: string;
}

const ItemMenu = ({icon, text}: ItemMenuProps ) => {
    return (
        <button className='item-menu'>
           <img src={icon} />
           <p> {text} </p>
        </button>
    )   
}

export default ItemMenu;