import React from 'react';
import NavigationArea from '../../components/Navigation/NavigationArea';
import Sidebar from '../../components/SideBar/Sidebar';
import Diorama from '../../components/Visuals/Diorama/Diorama';

const Projects: React.FC = (): JSX.Element => {
    return (
        <section>
            <Sidebar />
            <NavigationArea />
            <Diorama />
        </section>
    );
};

export default Projects;
