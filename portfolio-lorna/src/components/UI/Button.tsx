import React, { MouseEventHandler } from 'react';

type Props = {
    btnClass: string;
    children: React.ReactNode;
    type: 'submit' | 'reset' | 'button';
    action: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = ({
    btnClass,
    children,
    type = 'button',
    action,
}): JSX.Element => {
    return (
        <button className={btnClass} type={type} onClick={action}>
            {children}
        </button>
    );
};

export default Button;
