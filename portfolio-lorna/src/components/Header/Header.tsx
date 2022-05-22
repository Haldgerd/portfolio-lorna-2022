import React from 'react';
import EdgeLine from '../Visuals/EdgeLine/EdgeLine';
import Title from '../UI/Title';
import styles from './header.module.css';
import Introduction from '../Introduction/Introduction';

const Header: React.FC = (): JSX.Element => {
    return (
        <header className="tw-col-start-4 tw-col-end-8 tw-row-start-3 tw-w-full tw-mt-6">
            <Title titleClass={`${styles.home__title}`} title="I am Lorna" />
            <EdgeLine />
            <Introduction />
        </header>
    );
};

export default Header;
