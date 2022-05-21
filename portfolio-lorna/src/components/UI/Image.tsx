import React from 'react';
import Lorna from '../../assets/images/lorna.png';

const Image: React.VFC = (): JSX.Element => {
    return (
        <img
            src={Lorna}
            alt="Illustration of a female with blue hair and glasses from which rax of light is being emitted. Dressed in crop top with arcade print."
        />
    );
};

export default Image;
