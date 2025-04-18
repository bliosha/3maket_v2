import { useState } from 'react';
import logo from "../assets/logo.svg";

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const handleBurgerChange = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <nav className="header relative top-5 w-full">
            <div className="container flex justify-between pb-5 m-auto">
                <div className="nameCompany flex pr-2.5 pt-5">
                    <div className="logo pr-1.75 pl-2.5">
                        <img src={logo} alt="logo" className="max-w-15 md:max-w-20" />
                    </div>
                    <div className="title  text-gray-600">
                        <h2 className="text-[14px] font-bold sm:text-[18px] md:text-[22px]">Назва компанії:</h2>
                        <p className="text-[10px] font-normal font-roboto sm:text-[14px] md:text-[18px]">сама класна компанія</p>
                    </div>
                </div>
                <div className="contactCompany pr-2.5 pl-2.5 text-gray-600 sm:pr-5">
                    <div className="contact text-[14px] sm:text-[20px] md:text-[30px] hover:text-blue-500 font-urbanist font-thin ">
                        +38(099)890-56-78
                    </div>
                    <div className="contact text-[14px] sm:text-[20px] md:text-[30px] hover:text-blue-500 font-urbanist font-thin ">
                        +38(099)890-56-78
                    </div>
                    <div className="callback text-[10px] sm:text-[12px] md:text-[20px] font-bold underline decoration-dashed decoration-2 hover:text-blue-500">
                        Зворотній зв'язок
                    </div>
                </div>
            </div>

            <div className="menu pt-3 pb-3  w-full">
                <label className="pt-4.5 absolute right-2 z-51 bg-gray-600  pb-4.5 pl-1.5 pr-1.5 rounded-lg md:hidden">
                    <input
                        name="burgerCheck"
                        type="checkbox"
                        className="peer sr-only"
                        checked={isMenuVisible}
                        onChange={handleBurgerChange}
                    />
                    <span className="md:hidden
                    w-7
                    h-[3px]
                    block
                    bg-white
                    rounded-full
                    transition-all
                    duration-150
                    before:content-['']
                    before:absolute
                    before:w-7
                    before:h-[3px]
                    before:bg-white
                    before:rounded-full
                    before:-translate-y-2
                    before:transition-all
                    before:duration-150
                    after:content-['']
                    after:absolute
                    after:w-7
                    after:h-[3px]
                    after:bg-white
                    after:rounded-full
                    after:translate-y-2
                    after:transition-all
                    after:duration-150
                    peer-checked:bg-transparent
                    peer-checked:before:translate-y-0
                    peer-checked:before:rotate-45
                    peer-checked:after:translate-y-0
                    peer-checked:after:-rotate-45"></span>
                </label>

                <div className={`menu-item ${isMenuVisible ? 'flex' : 'hidden'} p-15  flex flex-col bg-gray-500 fixed h-full w-full top-0 bottom-0 left-0 right-0 z-50 overflow-y-auto text-white text-[30px] sm:text-[40px] md:text-[20px] md:flex md:w-full md:p-3 md:relative lg:pr-15 lg:pl-15 2xl:pr-20 xl:pl-20 2xl:text-2xl`}>
                    <ul className="flex-col md:flex md:flex-row justify-between shrink-0 gap-[3vw] items-center ">
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><a>Головна</a></li>
                        <li className="hidden md:block">|</li>
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><a>Каталог</a></li>
                        <li className="hidden md:block">|</li>
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><a>Доставка і оплата</a></li>
                        <li className="hidden md:block">|</li>
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><a>Ціни</a></li>
                        <li className="hidden md:block">|</li>
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><a>Контакти</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
