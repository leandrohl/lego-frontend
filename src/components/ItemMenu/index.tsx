

import './styles.scss'

interface ItemMenuProps {
    icon: string;
    text: string;
}

const ItemMenu = ({icon, text}: ItemMenuProps ) => {
    return (
        <div className='item-menu'>
           <img src={icon} />
           <p> {text} </p>
        </div>
    )   
}

export default ItemMenu;