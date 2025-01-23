import Link from 'next/link';
import classes from './meals-grid.module.css';
import MealItem from './meal-item';

export default function MealsGrid({ meals }: { meals: any[] }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: any) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}