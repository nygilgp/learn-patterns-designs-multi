import React, { useState, useEffect } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (name.length < 3) {
      setError('Name cannot be less than 3 chars');
    } else {
      setError(null);
    }
  }, [name]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(age);
  };

  return (
    <>
      {error ? <p>{error}</p> : ''}
      <form onSubmit={submitHandler}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default ControlledForm;
