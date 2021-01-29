import { useEffect, useState } from 'react';

export const useResize = () => {
  const [size, updateSize] = useState(null);
  const [sizeIndex, updatesizeIndex] = useState(null);

  // const xsMax = parseInt(styles.xsMax)
  // const smMax = parseInt(styles.smMax)
  // const mdMax = parseInt(styles.mdMax)
  // const lgMax = parseInt(styles.lgMax)
  // const xlMax = parseInt(styles.xlMax)

  const xsMax = 320;
  const smMax = 540;
  const mdMax = 768;
  const lgMax = 1024;
  const xlMax = 1440;

  const getDimensions = () => {
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }
  };

  const setSize = () => {
    let dimensions = getDimensions();
    if (dimensions.width > xlMax) {
      updateSize('xxl');
      updatesizeIndex(5);
    }
    if ((dimensions.width <= xlMax) && (dimensions.width > lgMax)) {
      updateSize('xl');
      updatesizeIndex(4);
    }
    if ((dimensions.width <= lgMax) && (dimensions.width > mdMax)) {
      updateSize('lg');
      updatesizeIndex(3);
    }
    if ((dimensions.width <= mdMax) && (dimensions.width > smMax)) {
      updateSize('md');
      updatesizeIndex(2);
    }
    if ((dimensions.width <= smMax) && (dimensions.width > xsMax)) {
      updateSize('sm');
      updatesizeIndex(1);
    }
    if (dimensions.width <= xsMax) {
      updateSize('xs');
      updatesizeIndex(0);
    }
  }

  useEffect(() => {
    setSize();
    window.addEventListener('resize', setSize)
    return () => {
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return { size, sizeIndex }
}