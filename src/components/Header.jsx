import { useState } from 'react';
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);



    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleBurgerChange = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Перевірка на валідність номера телефону
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            setError('Будь ласка, введіть правильний номер телефону.');
            return;
        }

        // Якщо все добре, показуємо успішне повідомлення
        setError('');
        setIsSuccess(true);
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        });

        // Додатково можна закрити модальне вікно після відправки
        setTimeout(() => {
            setIsModalOpen(false);
        }, 2000);
    };

    return (
        <nav className="header relative top-5 w-full bg-white">
            <div className="w-full px-[10px]">
                <div className="max-w-[980px] mx-auto flex justify-between pb-5">
                    <div className="nameCompany flex pr-2.5 pt-5">
                        <div className="logo pr-1.75 pl-5">
                            <img src={logo} alt="logo" className="max-w-10 h-10  md:max-w-20 md:h-20" />
                        </div>
                        <div className="title text-gray-600">
                            <h2 className="text-[14px] font-bold sm:text-[18px] md:text-[22px] font-ptsans">
                                Назва компанії:
                            </h2>
                            <p className="text-[10px] font-normal font-ptsans sm:text-[14px] md:text-[18px]">
                                сама класна компанія
                            </p>
                        </div>
                    </div>
                    <div className="contactCompany pr-5 pl-2.5 text-gray-600">
                        <div className="contact text-[14px] sm:text-[20px] md:text-[30px] hover:text-blue-500 font-urbanist font-thin">
                            <a href="tel:+380998905678" className="hover:text-blue-500">+38(099)890-56-78</a>
                        </div>
                        <div className="contact text-[14px] sm:text-[20px] md:text-[30px] hover:text-blue-500 font-urbanist font-thin">
                            <a href="tel:+380998905678" className="hover:text-blue-500">+38(099)890-56-78</a>
                        </div>
                        <div
                            className="callback text-[10px] sm:text-[12px] md:text-[20px] font-bold underline decoration-dashed decoration-2 hover:text-blue-500 font-ptsans cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Зворотній зв'язок
                        </div>
                    </div>
                </div>
            </div>

            {/* Зворотній зв'язок */}
            {isModalOpen && (
                <div className="fixed inset-0 z-52 flex items-center justify-center bg-[rgba(0,0,0,0.6)] transition-opacity duration-300">
                    <div className="bg-white pt-10 px-6 pb-6 w-[90%] max-w-md shadow-lg relative rounded-none">
                        <button
                            className="absolute -top-7 -right-7 bg-gray-500 w-7 h-7 flex items-center justify-center text-white hover:text-red-500 text-4xl font-thin leading-none shadow-md"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>
                        <h2 className="text-center text-lg font-bold mb-6 tracking-wide text-gray-700">ЗВОРОТНІЙ ЗВ'ЯЗОК</h2>

                        {/* Повідомлення про успіх */}
                        {isSuccess && <div className="text-green-500 text-center mb-4">Повідомлення успішно відправлено!</div>}

                        {/* Помилка введення */}
                        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-700 text-center">Ваше ім'я</label>
                                <input
                                    className="border border-gray-500 px-2 py-2 rounded-none"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-700 text-center">Телефон</label>
                                <input
                                    className="border border-gray-500 px-2 py-2 rounded-none"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-700 text-center">Email</label>
                                <input
                                    className="border border-gray-500 px-2 py-2 rounded-none"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-700 text-center">Повідомлення</label>
                                <textarea
                                    className="border border-gray-500  px-2 py-2 resize-none rounded-none"
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
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

            {/* бургер */}
            <div className="menu pt-3 pb-3 w-full">
                <label className="pt-4.5 absolute right-5 z-51 bg-gray-600 pb-4.5 pl-1.5 pr-1.5 rounded-lg md:hidden">
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
                    after:transition-allnp
                    after:duration-150
                    peer-checked:bg-transparent
                    peer-checked:before:translate-y-0
                    peer-checked:before:rotate-45
                    peer-checked:after:translate-y-0
                    peer-checked:after:-rotate-45"></span>
                </label>

                <div className={`menu-item ${isMenuVisible ? 'flex' : 'hidden'} px-[10px] items-center justify-center p-15 flex flex-col bg-gray-500 fixed h-full w-full top-0 bottom-0 left-0 right-0 z-50 overflow-y-auto text-white text-[30px] sm:text-[40px] md:text-[20px] md:flex md:w-full md:p-3 md:relative lg:pr-15 lg:pl-15 2xl:pr-20 xl:pl-20 2xl:text-2xl`}>
                    <ul className="max-w-[980px] flex-col md:flex md:flex-row justify-between shrink-0 gap-[1vw] items-center font-ptsans m-2">
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><Link onClick={handleBurgerChange} to="/">Головна</Link></li>
                        <li className="hidden md:block">|</li>
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><Link onClick={handleBurgerChange} to="/Catalog">Каталог</Link></li>
                        <li className="hidden md:block">|</li>
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><Link onClick={handleBurgerChange} to="Payments">Доставка і оплата</Link></li>
                        <li className="hidden md:block">|</li>
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><Link onClick={handleBurgerChange} to="Price">Ціни</Link></li>
                        <li className="hidden md:block">|</li>
                        <li className="cursor-pointer hover:text-blue-500 hover:underline"><Link onClick={handleBurgerChange} to="Contacts">Контакти</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
