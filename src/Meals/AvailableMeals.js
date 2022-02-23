import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {

    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Pizza',
          description: 'Finest pizza with veggies',
          price: 499,
        },
        {
          id: 'm2',
          name: 'Waffle',
          description: 'A french specialty!',
          price: 299,
        },
        {
          id: 'm3',
          name: 'Veg. Burger',
          description: 'Indian, raw, juicy',
          price: 129,
        },
        {
          id: 'm4',
          name: 'Green Salad',
          description: 'Healthy...and green...',
          price: 99,
        },
      ];

      const mealsList = DUMMY_MEALS.map((meal) => {
          return (
              <MealItem
                key={meal.id}
                id={meal.id}
                price={meal.price}
                name={meal.name}
                description={meal.description}
              >
              </MealItem>
          )
      })

      return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
      )
      
   
}

export default AvailableMeals;