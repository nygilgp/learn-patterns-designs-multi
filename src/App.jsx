// import { useState } from 'react';
// import ControlledModal from './components/controlled-modal';
// import UncontrolledFlow from './components/uncontrolled-flow';

import { useState } from 'react';
import ControlledFlow from './components/controlled-flow';

const Step1 = ({ goNext }) => {
  return (
    <>
      <h1>Step #1: Your personal info</h1>
      <button onClick={() => goNext({ name: 'Nexa' })}>Next</button>
    </>
  );
};
const Step2 = ({ goNext }) => {
  return (
    <>
      <h1>Step #2: More info</h1>
      <button onClick={() => goNext({ age: 18 })}>Next</button>
    </>
  );
};
const Step3 = ({ goNext }) => {
  return (
    <>
      <h1>You just got a luky gift!!!</h1>
      <button onClick={() => goNext({})}>Next</button>
    </>
  );
};
const Step4 = ({ goNext }) => {
  return (
    <>
      <h1>Step #4: Your country</h1>
      <button onClick={() => goNext({ country: 'India' })}>Next</button>
    </>
  );
};
function App() {
  // const [shouldDisplay, setShouldDisplay] = useState(false);
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onNext = (dataFromStep, stepsSize) => {
    console.log(stepsSize);
    const nextStepIndex = currentStepIndex + 1;
    const updatedData = {
      ...data,
      ...dataFromStep,
    };
    console.log(updatedData);
    console.log(nextStepIndex);
    if (nextStepIndex < stepsSize) {
      setCurrentStepIndex(nextStepIndex);
    } else {
      console.log(updatedData);
      alert('All steps completed in unconrolled flow!');
    }
    setData(updatedData);
  };

  return (
    <>
      {/* <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        Hi there...
      </ControlledModal>
      <button onClick={() => setShouldDisplay(true)}>display Modal</button> */}
      {/* <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
          alert('All steps completed in unconrolled flow!');
        }}
      >
        <Step1 />
        <Step2 />
        <Step3 />
      </UncontrolledFlow> */}
      <ControlledFlow currentIndex={currentStepIndex} onNext={onNext}>
        <Step1 />
        <Step2 />
        {data.age > 20 && <Step3 />}
        <Step4 />
      </ControlledFlow>
    </>
  );
}

export default App;
