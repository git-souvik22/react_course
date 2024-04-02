import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I've ever used in my life!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life style.",
      author: "Souvik Roy",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button type="button" onClick={handlePrevClick}>
          Prev
        </button>
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
