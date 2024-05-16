

import { ReactNode } from 'react';
import './styles.scss'

interface ButtonProps {
    leftIcon?: string;
    rightIcon?: string;
    onClick: () => void;
    children: ReactNode;
}

const Button = ({ leftIcon, rightIcon, onClick, children }: ButtonProps) => {

    return (
        <button className={`button`} onClick={onClick}>
            {leftIcon && <img src={leftIcon}  />}
            <p>{children}</p>
            {rightIcon && <img src={rightIcon} />}
        </button>
    );
}

export default Button;