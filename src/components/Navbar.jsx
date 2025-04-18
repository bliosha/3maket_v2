import { useState } from 'react';

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const handleBurgerChange = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <nav className=" relative top-5 w-full">
            <div className="relative z-10 flex items-center justify-between">

            </div>
        </nav>
    );
};

export default Navbar;
