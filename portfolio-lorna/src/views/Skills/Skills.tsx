import React from 'react';
import Sidebar from '../../components/SideBar/Sidebar';
import Diorama from '../../components/Visuals/Diorama/Diorama';

const Skills: React.FC = (): JSX.Element => {
    return (
        <section>
            <Sidebar />
            <Diorama />
        </section>
    );
};

export default Skills;
