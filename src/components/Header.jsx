import { useState } from 'react';
import logo from "../assets/logo.svg";
import {Link} from "react-router-dom";

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                        <h2 className="text-[14px] font-bold sm:text-[18px] md:text-[22px] font-ptsans">Назва компанії:</h2>
                        <p className="text-[10px] font-normal font-ptsans sm:text-[14px] md:text-[18px]">сама класна компанія</p>
                    </div>
                </div>
                <div className="contactCompany pr-2.5 pl-2.5 text-gray-600 sm:pr-5">
                    <div className="contact text-[14px] sm:text-[20px] md:text-[30px] hover:text-blue-500 font-urbanist font-thin ">
                        +38(099)890-56-78
                    </div>
                    <div className="contact text-[14px] sm:text-[20px] md:text-[30px] hover:text-blue-500 font-urbanist font-thin ">
                        +38(099)890-56-78
                    </div>
                    <div
                        className="callback text-[10px] sm:text-[12px] md:text-[20px] font-bold underline decoration-dashed decoration-2 hover:text-blue-500 font-ptsans cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Зворотній зв'язок
                    </div>
                </div>
            </div>

            {/*Зворотній зв'язок*/}
            {isModalOpen && (
                <div className="fixed inset-0 z-52 flex items-center justify-center bg-[rgba(0,0,0,0.6)] transition-opacity duration-300">
                    <div className="bg-white pt-10 px-6 pb-6 w-[90%] max-w-md shadow-lg relative rounded-none">
                        {/* Кнопка закриття */}
                        <button
                            className="absolute -top-7 -right-7 bg-gray-500 w-7 h-7 flex items-center justify-center text-white hover:text-red-500 text-4xl font-thin leading-none shadow-md"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>

                        {/* Заголовок */}
                        <h2 className="text-center text-lg font-bold mb-6 tracking-wide text-gray-700">ЗВОРОТНІЙ ЗВ'ЯЗОК</h2>

                        {/* Форма */}
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-700 text-center">Ваше ім'я</label>
                                <input className="border border-gray-500 px-2 py-2 rounded-none" type="text" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-700 text-center">Телефон</label>
                                <input className="border border-gray-500 px-2 py-2 rounded-none" type="tel" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-700 text-center">Email</label>
                                <input className="border border-gray-500 px-2 py-2 rounded-none" type="email" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-700 text-center">Повідомлення</label>
                                <textarea className="border border-gray-500  px-2 py-2 resize-none rounded-none" rows={4} />
                            </div>
                            <button
                                type="submit"
                                className="bg-gray-500 text-white py-1.5 px-6 text-sm self-center hover:bg-gray-900"
                            >
                                ВІДПРАВИТИ
                            </button>
                        </form>
                    </div>
                </div>
            )}

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
                    <ul className="flex-col md:flex md:flex-row justify-between shrink-0 gap-[3vw] items-center font-ptsans">
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><Link to="/">Головна</Link></li>
                        <li className="hidden md:block">|</li>
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><Link to="/Catalog">Каталог</Link></li>
                        <li className="hidden md:block">|</li>
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><Link to="Payments">Доставка і оплата</Link></li>
                        <li className="hidden md:block">|</li>
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><Link to="Price">Ціни</Link></li>
                        <li className="hidden md:block">|</li>
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><Link to="Contacts">Контакти</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
