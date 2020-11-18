import { useEffect, useRef, useState } from "react";

const useDimension = (ref) => {
  const [dimensions, setDimensions] = useState(null);

  const updateDimensions = () => {
    setDimensions(ref.current?.getBoundingClientRect().toJSON());
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions)
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [ref]);
  return dimensions;
};

export default useDimension;