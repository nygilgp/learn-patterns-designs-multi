import React from 'react';

function ControlledFlow({ children, currentIndex, onNext }) {
  const allReactChildElements = React.Children.toArray(children);
  const goNext = (dataFromStep) => {
    onNext(dataFromStep, allReactChildElements.length);
  };

  const currentChild = allReactChildElements[currentIndex];

  if (React.isValidElement(currentChild))
    return React.cloneElement(currentChild, { goNext });

  return currentChild;
}

export default ControlledFlow;
