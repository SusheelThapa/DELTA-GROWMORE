import { useEffect, useState } from "react";
interface CarouselProps {
    slides: React.ReactNode[];
    interval?: number;
  }
  
  const Carousel: React.FC<CarouselProps> = ({ slides, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, interval);
  
      return () => clearInterval(intervalId);
    }, [currentIndex, interval, slides.length]);
  
    return (
        <div className="relative w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            } absolute inset-0 transition-opacity duration-1000 w-full`}
          >
            {slide}
          </div>
        ))}
      </div>
    );
  };
  

export default Carousel;
