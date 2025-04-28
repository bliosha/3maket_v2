import './App.css'
import slide1 from "./assets/Carousel/slide1.jpg";
import slide2 from "./assets/Carousel/slide2.jpg";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Carousel from "./components/Carousel.jsx";
import Catalog from "./components/Catalog.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./components/NotFound.jsx";

const slides = [slide1, slide2];

const App = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={
                        <div className="flex justify-center items-center w-full mt-6">
                            <div className="w-full max-w-full">
                                <Carousel>
                                    {slides.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            className="w-full h-full object-cover"
                                            alt={`slide ${i}`}
                                        />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    } />
                    <Route path="/Catalog" element={<Catalog />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
