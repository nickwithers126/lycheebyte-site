'use client';
import { useEffect, useState } from 'react';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

export default function Carousel() {
  const projects = [
    {
      title: 'Post-CMP Consumable Manufacturer',
      description: 'Applications lab design and strategy for product development',
      image: '/project1.jpg',
    },
    {
      title: 'CMP Pad Startup',
      description: 'Value proposition development and data package for seed funding',
      image: '/project2.jpg',
    },
    {
      title: 'Post-CMP Consumable Startup',
      description: 'Process and product development support for global product launch',
      image: '/project3.jpg',
    },
  ];

  const [index, setIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const updateItemsPerView = () => {
      setItemsPerView(mediaQuery.matches ? 2 : 1);
    }

    updateItemsPerView(); // Set initial value
    mediaQuery.addEventListener('change', updateItemsPerView);

    return () => {
      mediaQuery.removeEventListener('change', updateItemsPerView);
    }

  }, []);

  const handleNext = () => {
    if (itemsPerView === 1) {
      setIndex(index + 1);
    } else {
      setIndex(2);
    }
    setShowLeftArrow(false); // hide left during transition
    setShowRightArrow(false); // hide right too to prevent flicker
    setTimeout(() => {
      setShowLeftArrow(true);
      setShowRightArrow(true);
    }, 500);
  };

  const handlePrev = () => {
    if (itemsPerView === 1) {
      setIndex(index - 1);
    } else {
      setIndex(0);
    }
    setShowRightArrow(false); // hide right during slide back
    setShowLeftArrow(false); // hide left since we’ll be back at the beginning
    setTimeout(() => {
      setShowRightArrow(true);
      setShowLeftArrow(true);
    }, 500);
  };

  return (
    <div className="max-w-7xl mx-auto flex items-center">

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        disabled={index === 0}
        className={`mr-3 rounded-full z-10 transition-opacity duration-300 
          ${index === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <CircleArrowLeft size={40} color="#64C084" />
      </button>

      {/* Viewport */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 md:duration-00 ease-in-out"
          style={{
            width: `${projects.length * (100 / itemsPerView)}%`,
            transform: `translateX(-${index * (100 / projects.length)}%)`,
          }}
        >
          {projects.map((project, i) => (
            <div key={i} className="w-[33.3333%] flex-shrink-0 px-4 box-border flex items-stretch">
              <div className="overflow-hidden h-auto w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 md:h-96 object-cover mb-4"
                />
                <h3 className="text-lg md:text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-sm md:text-base text-white">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        disabled={index === 2}
        className={`ml-3 rounded-full z-10 transition-opacity duration-300 
          ${index === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <CircleArrowRight size={40} color="#64C084" />
      </button>
    </div>
  );
}
