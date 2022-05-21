import React, { MouseEventHandler } from 'react';

type Props = {
    btnClass: string;
    children: React.ReactNode;
    type: 'submit' | 'reset' | 'button';
    // eslint-disable-next-line react/require-default-props
    action?: MouseEventHandler<HTMLButtonElement>;
    // TODO: look into it.
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
