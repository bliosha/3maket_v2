import React from 'react';
import pricelist from "../assets/img/logo_price-list.jpg";
import Chaynik from "../assets/img/nophoto.jpg";
import Cart from "../assets/img/icon_buy.svg";
import {Link} from "react-router-dom";

const Catalog = () => {
    const products = Array(5).fill({
        title: 'Самий класний чайник, який треба купити!',
        price: '1 900 грн.',
        image: 'kettle.png',
    });

    return (
        <div className="w-full font-ptsans text-[14px] leading-[22px] mt-10">
            {/* Breadcrumbs */}
            <nav className="text-sm mb-4 text-gray-500 max-w-[980px] px-[10px] mx-auto">
                <ol className="list-reset flex">
                    <li><Link to="/" className="hover:text-blue-600 underline">Головна</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link to="/Catalog" className="hover:text-blue-600 underline">Каталог</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="text-gray-500 ">Побутова техніка</li>
                </ol>
            </nav>

            <div className="max-w-[980px] px-[10px] mx-auto flex flex-col md:flex-row">
                {/* Лівий блок */}
                <aside className="flex-none w-full md:w-1/4 pr-4 text-gray-500">
                    <ul className="space-y-2 text-md">
                        <li className="font-bold">Автомобілі</li>
                        <li className="font-bold relative cursor-pointer">
                            <span className="underline">Побутова техніка</span>
                            <ul className="pl-4 text-gray-500 bg-white mt-1 z-10 list-disc text-sm">
                                <li className="py-1 px-2 hover:bg-gray-100 text-gray-700"><a href="#" className="underline">Мікрохвильовки</a></li>
                                <li className="py-1 px-2 hover:bg-gray-100"><a href="#">Холодильники</a></li>
                                <li className="py-1 px-2 hover:bg-gray-100"><a href="#">Посудомийки</a></li>
                                <li className="py-1 px-2 hover:bg-gray-100"><a href="#">Чайники</a></li>
                            </ul>
                        </li>
                        <li className="font-bold">Мобільна техніка</li>
                        <li className="font-bold">Комп'ютери</li>
                        <li className="font-bold">Одяг</li>
                        <li className="font-bold">Нерухомість</li>
                    </ul>
                    <div className="mt-30 mb-10 flex flex-col items-center">
                        <img src={pricelist} alt="Прайс-лист" className="w-24 mx-auto" />
                        <span>Прайс лист</span>
                    </div>
                </aside>

                {/* Товари */}
                <section className="flex-grow w-full md:w-3/4 p-10 sm:p-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {products.map((product, index) => (
                            <div key={index} className="p-5 text-center bg-gray-300 font-urbanist">
                                <img src={Chaynik} alt="Чайник" className="mx-auto mb-2" />
                                <p className="mt-5 text-sm text-gray-500 font-normal">
                                    <a href="#" className="hover:underline">{product.title}</a>
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-20">
                                    <p className="text-[18px] font-bold text-gray-700">{product.price}</p>
                                    <a href="#" className="hover:opacity-75">
                                        <img src={Cart} alt="Додати до кошика" className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Пагінація */}
                    <div className=" mt-8 flex justify-center text-sm text-gray-600 space-x-2">
                        {[1, 2, 3, 4, 5, 6, 7].map(num => (
                            <button key={num} className="cursor-pointer hover:underline hover:font-bold">{num}</button>
                        ))}
                    </div>

                    {/* Інформація про компанію */}
                    <div className="max-w-[980px] mx-auto mt-10 border-t border-gray-300 pt-6 px-4 text-gray-500 text-sm leading-relaxed font-ptsans flex flex-col md:flex-row gap-8 mb-30">
                        <div className="md:w-1/2">
                            <p>
                                Компанія «Піксель Плюс» існує більше 6 років, за цей час ми приймали участь у розробці більше ніж 700 сайтів, тому можете впевнено називати себе професіоналами. На даний момент наш колектив складається з більше ніж 30 співробітників, які працюють у двох офісах у Москві та Зеленограді.
                            </p>
                            <p className="mt-4">
                                Характерне для цього жанру мистецтво: нерозділене кохання, втрата молодості, згасання душі.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <p>
                                Одним із основних напрямків роботи нашої компанії є пошукове просування сайтів. На даний момент ми працюємо з більш ніж 150 постійними клієнтами на понад 11 000 пошукових запитів.
                            </p>
                            <p className="mt-4">
                                При цьому основний акцент ми робимо на якість роботи, а також використовуємо власні унікальні розробки у сфері SEO. Наразі відділ SEO складається з 9 осіб під керівництвом провідного спеціаліста, які переважно працюють у нашому московському офісі.
                            </p>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Catalog;