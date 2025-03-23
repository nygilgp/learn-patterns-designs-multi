import styled from 'styled-components';
import useFetchMeals from './useFetchMeals';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';

const Container = styled.div`
  padding-top: 8px;
  max-width: 2xl;
  margin: auto;
`;

const Form = styled.form`
  margin-bottom: 8px;
`;

const FormField = styled.fieldset`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  brder-radius: 8px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2xl;
  margin-bottom: 4px;
`;

const MealContainer = styled.div`
  max-height: 60;
  overflow-y: auto;
`;

const MealItem = styled.div`
  padding: 1px;
  background-color: ${(props) => (props.odd ? '#ccc' : 'transparent')};
`;

const SearchMeals = () => {
  const [query, setQuery] = useState('');
  const { meals, fetchMeals } = useFetchMeals();

  useEffect(() => {
    fetchMeals(query);
  }, [query]);

  console.log(meals);

  return (
    <Container>
      <ToastContainer />
      <Form>
        <FormField>
          <Label htmlFor="search">Find your lowely meal</Label>
          <Input
            id="search"
            type="text"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </FormField>
      </Form>
      <div>
        <Title>Meals</Title>
        <MealContainer>
          {meals &&
            meals.map((meal, index) => (
              <MealItem odd={index % 2 !== 0} key={meal.idMeal}>
                {meal.strMeal}
                <img src={meal.strMealThumb} alt={meal.strMeal} width={50} />
              </MealItem>
            ))}
        </MealContainer>
      </div>
    </Container>
  );
};

export default SearchMeals;
