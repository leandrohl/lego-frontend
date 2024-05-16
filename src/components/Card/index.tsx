

import Button from '../Button';
import './styles.scss'
import ArrowLeft from '../../assets/svg/arrow-left.svg';

interface CardProps {
    type: 'primary' | 'secondary';
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    viewDetails: () => void;
}

const Card = ({ type, title, description, image, viewDetails }: CardProps) => {
    return (
        <div className={`card ${type}`}>
           <div className={`info ${type}`}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                    <Button rightIcon={ArrowLeft} type='primary' onClick={viewDetails}>View details</Button>
                </div>
            </div>
            <div className='img'>
                <img src={image.src} alt={image.alt}/>
            </div>
        </div>
    )   
}

export default Card;