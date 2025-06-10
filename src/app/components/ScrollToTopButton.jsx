"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Track the scroll position
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      // Show button after scrolling 300px
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        // className="fixed bottom-10 right-10 z-10 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 focus:outline-none transition-all"

        className={`fixed bottom-10 right-10 z-50 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 focus:outline-none transition-all duration-300 ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-label="Back to top"
      >
        <FaArrowUp className="w-6 h-6" />
      </button>
    )
  );
};

export default ScrollToTopButton;
