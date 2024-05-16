

import { ReactNode } from 'react';
import './styles.scss'

interface ButtonProps {
    type: 'primary' | 'secondary';
    leftIcon?: string;
    rightIcon?: string;
    onClick: () => void;
    children: ReactNode;
}

const Button = ({ type, leftIcon, rightIcon, onClick, children }: ButtonProps) => {
    const buttonClass = type === 'primary' ? 'button-primary' : 'button-secondary';

    return (
        <button className={`button ${buttonClass}`} onClick={onClick}>
            {type === 'primary' && <img src={leftIcon}  />}
            <p>{children}</p>
            {type === 'primary' && <img src={rightIcon} />}
        </button>
    );
}

export default Button;