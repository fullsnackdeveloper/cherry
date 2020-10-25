import { useEffect, useState } from 'react';

import styles from '../styles/variables.scss';

export const useResize = (ref) => {
  const [size, updateSize] = useState(null);
  const [sizeIndex, updatesizeIndex] = useState(null);
  console.log(ref.current)

  const xsMax = parseInt(styles.xsMax)
  const smMax = parseInt(styles.smMax)
  const mdMax = parseInt(styles.mdMax)
  const lgMax = parseInt(styles.lgMax)
  const xlMax = parseInt(styles.xlMax)

  const getDimensions = () => ({
    width: ref.current.offsetWidth,
    height: ref.current.offsetHeight
  });

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
    if (ref.current) {
      setSize();
    }
    console.log(size, sizeIndex)
    window.addEventListener('resize', setSize)
    return () => {
      window.removeEventListener('resize', setSize)
    }
  }, [ref])

  return { size, sizeIndex }
}