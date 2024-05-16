

import './styles.scss'

interface IconButtonProps {
    size?: 'small' | 'large';
    icon: string;
    onClick: () => void;
}

const IconButton = ({ size = 'small', icon, onClick }: IconButtonProps) => {
    return (
        <button className={`icon-button ${size}`} onClick={onClick}>
            <img src={icon}  />
        </button>
    );
}

export default IconButton;