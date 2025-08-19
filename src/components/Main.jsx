import { useState } from "react";

export default function Main() {
    
    // Ingredients array state
    const [ingredients, setIngredients] = useState([]);

    const ingredientsListItems = ingredients.map(ingredient => // To display array of ingredients on screen
        <li key={ingredient}>{ingredient}</li>
    )

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient").trim();
        
        // Add ingredient to array of ingredients
        setIngredients(prev => [...prev, newIngredient])        
    }

    return (
        <main className="pb-[10px] pt-[30px] px-[30px]">
            <form onSubmit={handleSubmit} className="flex justify-center gap-[12px] h-[38px]">
                <input
                    type="text"
                    placeholder="e.g. tomato"
                    aria-label="Add ingredient"
                    name="ingredient"
                    className="border-1 border-[#d1d5db] rounded-md
                    py-[9px] px-[13px] 
                    shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]
                    grow
                    min-w-[150px] max-w-[400px]"
                />
                <button
                    className="rounded-md bg-[#141413] text-[#fafaf8]
                    before:content-['+'] before:mr-[5px]
                    w-[150px] text-[0.875rem] font-medium"
                >Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}