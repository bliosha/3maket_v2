import {useState} from "react";
import left from '/src/assets/img/left.jpg'
import right from '/src/assets/img/right.jpg'


const Carousel = ({children:slides}) => {
    const [curr ,setCurr ] = useState(0);

    const prev = () => setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));

    return (
        <div className="overflow-hidden relative w-full pt-15 md:pt-0">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full shrink-0">
                        {slide}
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-7 sm:p-10  z-10">
                <button
                    onClick={prev}
                    className="left"
                >
                    <img src={left} alt="left" className="size-5 sm:size-10 lg:size-15 2xl:size-18" />
                </button>
                <button
                    onClick={next}
                    className="right"
                >
                    <img src={right} alt="right" className="size-5 sm:size-10 lg:size-15 2xl:size-18" />
                </button>
            </div>
        </div>

    )
}
export default Carousel;