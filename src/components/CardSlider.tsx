import React, { useRef, useEffect, useState } from "react";
import CardWithDivider from "./Cards/CardWithDivider"; // Adjust the import path if needed

interface CardSliderProps {
  cards: Array<{
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
    linkText: string;
  }>;
}

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(300);
  const [visibleCards, setVisibleCards] = useState(1);

  const updateCardWidth = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const newCardWidth = Math.min(sliderWidth / visibleCards - 20, 300);
      setCardWidth(newCardWidth);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newVisibleCards = Math.floor(screenWidth / 320); // Adjust the offset as needed
      setVisibleCards(newVisibleCards);
      updateCardWidth();
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set up the correct state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex overflow-x-scroll scrollbar-hide" ref={sliderRef}>
        {cards.map((card, index) => (
          <div key={index} className="m-2" style={{ minWidth: `${cardWidth}px` }}>
            <CardWithDivider {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
