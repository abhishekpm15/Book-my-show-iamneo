import React from 'react'

const Carousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          className={`absolute w-full h-full object-cover rounded-lg shadow-md ${
            index === currentIndex ? '' : 'hidden'
          }`}
          alt=""
        />
      ))}
      <button
        className="absolute left-0 top-0 w-12 h-12 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline"
        onClick={handlePrevClick}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-0 top-0 w-12 h-12 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline"
        onClick={handleNextClick}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;