
// usestate is a react library that lets components have memory, if we want to store dynamic items
// useEffect: This is a tool that lets us run code after the component has been shown on the screen. It's used for tasks that interact with the browser, like setting up animations or listeners.
import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

// 'export makes StarBackground function usable in other files'
export const StarBackground = () => {


  // stars array. whenever setStars is called in new array, background is re-rendered with new data
  const [stars, setStars] = useState([]);


  // useEffect to run code just once right when component appears on the screen
  useEffect(() => {
    generateStars();

    // function to regenerate stars 
    const handleResize = () => {
      generateStars();
    };

    // if window size ever changes, function is called again and stars are resized
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // FUNCTION: GENERATE STARS 
  const generateStars = () => {
    // function for number of stars based on window size 
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    // empty list to hold stars 
    const newStars = [];

    // for each star we have to create
    for (let i = 0; i < numberOfStars; i++) {
        // javascript object for single star
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    // update component memory with list of stars
    setStars(newStars);
  };

  // describes what function looks like in html
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{

            // size of stars 
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );

}