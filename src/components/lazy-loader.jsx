import { useState, useEffect } from 'react';

const LazyLoader = (props) => {
  const { show, delay } = props;
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    let timeout;
    if (!show) {
      setShowLoader(false);
      return;
    }
    if (delay === 0) {
      setShowLoader(true);
    } else {
      timeout = setTimeout(() => setShowLoader(true), delay);
    }
    return () => {
      clearInterval(timeout);
    };
  }, [show, delay]);
  return showLoader ? 'Loading...' : props.children;
};

LazyLoader.defaultProps = { show: false, delay: 0 };

export default LazyLoader;
