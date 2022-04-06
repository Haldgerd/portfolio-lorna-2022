import React from "react";
import generateHashID from "../../util/helpers/generateHashID.js";

const NAV_ICONS = [
    {
        id: generateHashID(),
        icon: "icon",
    },
    {
        id: generateHashID(),
        icon: "icon",
    },
    {
        id: generateHashID(),
        icon: "icon",
    },
    {
        id: generateHashID(),
        icon: "icon",
    },
];

console.log(NAV_ICONS[0].id);
// const createNavButtons = () => {
//     return NAV_ICONS.map((button) => {
//         console.log(button.id);
//     });
// };

const NavigationArea = () => {
    return <div>NavigationArea</div>;
};

export default NavigationArea;
