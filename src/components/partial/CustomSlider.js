"use client";

import { useEffect, useRef, useState } from "react";
import IconDropdownArrow from "../icons/IconDropDown";

export default function CustomSlider({
  children,
  itemsPerView = 3,
  arrow_color = "text-granite-dark",
}) {
  const childrenArray = Array.isArray(children)
    ? children
    : [children].filter(Boolean);

  const length = childrenArray.length;

  const [itemsToShow, setItemsToShow] = useState(itemsPerView);
  const [currentIndex, setCurrentIndex] = useState(itemsPerView);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStartX, setTouchStartX] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
        setCurrentIndex(1); // reset for mobile view
      } else {
        setItemsToShow(itemsPerView);
        setCurrentIndex(itemsPerView); // reset for desktop view
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  const totalSlides = length + 2 * itemsToShow;

  const renderSlides = () => {
    const prevClones = childrenArray.slice(-itemsToShow).map((child, i) => (
      <div key={`clone-prev-${i}`}>{child}</div>
    ));

    const mainSlides = childrenArray.map((child, i) => (
      <div key={`main-${i}`}>{child}</div>
    ));

    const nextClones = childrenArray.slice(0, itemsToShow).map((child, i) => (
      <div key={`clone-next-${i}`}>{child}</div>
    ));

    return [...prevClones, ...mainSlides, ...nextClones];
  };

  const extendedChildren = renderSlides();

  const next = () => {
    if (!isTransitioning || isButtonDisabled) return;
    setIsButtonDisabled(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => setIsButtonDisabled(false), 500);
  };

  const prev = () => {
    if (!isTransitioning || isButtonDisabled) return;
    setIsButtonDisabled(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => setIsButtonDisabled(false), 700);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX - touchEndX;

    if (distance > 50) next();
    else if (distance < -50) prev();

    setTouchStartX(null);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(length);
    } else if (currentIndex === length + itemsToShow) {
      setIsTransitioning(false);
      setCurrentIndex(itemsToShow);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  const translateX = -(currentIndex * (100 / totalSlides));

  return (
    <div className="w-full overflow-hidden" data-component="CustomSlider">
      <div
        ref={sliderRef}
        className={`flex ${
          isTransitioning ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTransitionEnd={handleTransitionEnd}
        style={{
          width: `${(totalSlides * 100) / itemsToShow}%`,
          transform: `translateX(${translateX}%)`,
        }}
      >
        {extendedChildren.map((child, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ width: `${100 / totalSlides}%` }}
          >
            <div className="px-2">{child}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4 px-4">
        <div className="flex justify-center space-x-2">
          {childrenArray.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i + itemsToShow)}
              className={`w-5 h-5 rounded-full transition-colors duration-200 ${
                i + itemsToShow === currentIndex ? "bg-orange" : "bg-stone"
              }`}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button onClick={prev} disabled={isButtonDisabled} className="px-2 py-1">
            <IconDropdownArrow color={arrow_color} direction="left" />
          </button>
          <button onClick={next} disabled={isButtonDisabled} className="px-2 py-1">
            <IconDropdownArrow color={arrow_color} direction="right" />
          </button>
        </div>
      </div>
    </div>
  );
}
