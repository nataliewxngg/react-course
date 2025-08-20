import { useState } from "react";

export default function Main() {
    
    // Ingredients array state
    const [ingredients, setIngredients] = useState([]);

    const ingredientsListItems = ingredients.map(ingredient => // To display array of ingredients on screen
        <li key={ingredient}>{ingredient}</li>
    )

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient").trim();
        
        // Add ingredient to array of ingredients
        setIngredients(prev => [...prev,
            newIngredient.charAt(0).toUpperCase() + newIngredient.slice(1)])        
    }

    // Recipe shown state
    const [recipeShown, setRecipeShown] = useState(false);

    function toggleRecipe() {
        setRecipeShown(!recipeShown);
    }

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

            {ingredients.length > 0 && <section>
                <h2 className="text-[1.3rem] font-semibold leading-13">Ingredients on hand:</h2>
                <ul className="mb-[30px] list-disc pl-5 text-[#475467] text-[0.9rem] leading-8" aria-live="polite">{ingredientsListItems}</ul>

                {ingredients.length > 3 && <div className="bg-[#f0efeb] rounded-lg flex p-[20px] justify-between items-center">
                    <div>
                        <h3 className="text-[0.9rem] font-medium">Ready for a recipe?</h3>
                        <p className="text-[0.7rem] font-normal text-[#6b7280]">Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className="bg-[#d17557] text-[#fafaf8] text-[0.7rem] px-[17px] py-[7px] rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] cursor-pointer" onClick={toggleRecipe}>Get a recipe</button>
                </div>}

            </section>}

            {/* pasted recipe placeholder code */}
            {recipeShown && <section>
                <h2>Chef Claude Recommends:</h2>
                <article className="suggested-recipe-container" aria-live="polite">
                    <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
                    <h3>Beef Bolognese Pasta</h3>
                    <strong>Ingredients:</strong>
                    <ul>
                        <li>1 lb. ground beef</li>
                        <li>1 onion, diced</li>
                        <li>3 cloves garlic, minced</li>
                        <li>2 tablespoons tomato paste</li>
                        <li>1 (28 oz) can crushed tomatoes</li>
                        <li>1 cup beef broth</li>
                        <li>1 teaspoon dried oregano</li>
                        <li>1 teaspoon dried basil</li>
                        <li>Salt and pepper to taste</li>
                        <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                    </ul>
                    <strong>Instructions:</strong>
                    <ol>
                        <li>Bring a large pot of salted water to a boil for the pasta.</li>
                        <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                        <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                        <li>Stir in the tomato paste and cook for 1 minute.</li>
                        <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                        <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                        <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                        <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                        <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                    </ol>
                </article>
            </section>}
        </main>
    )
}