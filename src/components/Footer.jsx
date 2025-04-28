import FooterLogo from "../assets/img/logo_companydev.svg";

import React from "react";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-500 text-white text-sm leading-[22px] font-ptsans">
            <div className=" max-w-[980px] mx-auto px-[10px] py-6 flex flex-col md:flex-row justify-between gap-6">
                <div className="space-y-1 mt-6">
                    <p>© 2025–2025 «Soprano»</p>
                    <a href="mailto:l4212550@gmail.com" className="underline">l4212550@gmail.com</a>
                </div>

                <ul className="space-y-1 mt-6 ">
                    <li><Link to="/" onClick={()=>window.scrollTo(0, 0)} className="hover:underline">Головна</Link></li>
                    <li><Link to="/Catalog" onClick={()=>window.scrollTo(0, 0)} className="hover:underline">Каталог</Link></li>
                    <li><Link to="*" onClick={()=>window.scrollTo(0, 0)} className="hover:underline">Доставка і оплата</Link></li>
                    <li><Link to="*" onClick={()=>window.scrollTo(0, 0)} className="hover:underline">Ціни</Link></li>
                    <li><Link to="*" onClick={()=>window.scrollTo(0, 0)} className="hover:underline">Контакти</Link></li>
                </ul>

                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1">
                        <div className="mt-6"> <img src={FooterLogo} alt="CompanyLogo" className=" w-9 h-9" /></div>
                        <span>Розробка сайта — Soprano</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
