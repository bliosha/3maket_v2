import './App.css'

import Header from "./components/Header.jsx";
import Carousel from "./components/Carousel.jsx";

import slide1 from "./assets/Carousel/slide1.jpg";
import slide2 from "./assets/Carousel/slide2.jpg";

const slides = [
    slide1,
    slide2,
]
const App = () => {

    return (
        <main className="bg-white ">
            <Header />
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
        </main>
    )
}

export default App