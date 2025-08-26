import { useState, useEffect, useRef } from "react";
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getAIRecipe } from '../../netlify/functions/ai.js'

export default function Main() {
    
    // Ingredients array state
    const [ingredients, setIngredients] = useState([]);

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient").trim();
        
        // Add ingredient to array of ingredients
        setIngredients(prev => [...prev,
            newIngredient.charAt(0).toUpperCase() + newIngredient.slice(1)])        
    }

    // Recipe
    const [recipe, setRecipe] = useState("");
    async function getRecipe() {
        setLoading(true);
        console.log("getting recipe!")
        const recipeMarkdown = await getAIRecipe(ingredients);
        setRecipe(recipeMarkdown);
        setLoading(false);
    }

    // for Scroll into view
    const recipeSection = useRef(null);
    useEffect(() => {
        if (recipe && recipeSection.current) {
            recipeSection.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [recipe]);

    // Loading state
    const [loading, setLoading] = useState(false);
    console.log(loading);

    return (
        <main className="pb-[10px] pt-[30px] px-[30px]">
            <form action={addIngredient} className="flex justify-center gap-[12px] h-[38px] mb-[20px]">
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
                    w-[150px] text-[0.875rem] font-medium cursor-pointer"
                >Add ingredient</button>
            </form>

            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} ref={recipeSection} />}

            {/* pasted recipe placeholder code */}
            <ClaudeRecipe recipe={recipe} loading={loading} />
        </main>
    )
}