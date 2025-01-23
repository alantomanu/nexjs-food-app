import MealItem from "./meal-item"

export default function MealsGrid({ meals }: any) {
    return (
        <ul>
            {meals.map((meal: any) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}
