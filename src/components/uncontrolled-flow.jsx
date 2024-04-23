import React, { useState } from 'react';

function UncontrolledFlow({ children, onDone }) {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (dataFromStep) => {
    const nextStepIndex = currentStepIndex + 1;

    const updatedData = {
      ...data,
      ...dataFromStep,
    };
    console.log(updatedData);
    if (nextStepIndex < children.length) {
      setCurrentStepIndex(nextStepIndex);
    } else {
      onDone(updatedData);
    }
    setData(updatedData);
  };

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement(currentChild))
    return React.cloneElement(currentChild, { goNext });

  return currentChild;
}

export default UncontrolledFlow;
