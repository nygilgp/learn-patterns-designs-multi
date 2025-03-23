import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { searchMeals } from '../../api/mealApi';
import { didAbort } from '../../api/api';

const useFetchMeals = (searchTerm) => {
  const [meals, setMeals] = useState([]);
  const abortRef = useRef({});

  const handleQouteError = (error) => {
    if (didAbort(error)) {
      toast.error('Request aborted');
    } else {
      toast.error('An error occurred');
    }
  };

  const fetchMeals = async (query) => {
    try {
      abortRef.current.abort?.();
      const newMeals = await searchMeals(query, {
        abort: (abort) => (abortRef.current.abort = abort),
      });
      setMeals(newMeals);
    } catch (error) {
      handleQouteError(error);
    }
  };

  return { meals, fetchMeals };
};

export default useFetchMeals;
