

import './styles.scss'

interface CardMenuProps {
    image: {
        src: string;
        alt: string;
    };
}

const CardMenu = ({image}: CardMenuProps ) => {
    return (
        <div className='card-menu'>
           <img src={image.src} alt={image.alt}/>
        </div>
    )   
}

export default CardMenu;