function IngredientsList(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => // To display array of ingredients on screen
        <li key={ingredient}>{ingredient}</li>
    );

    return (
        <section>
            <h2 className="text-[1.3rem] font-semibold leading-13">Ingredients on hand:</h2>
            <ul className="mb-[30px] list-disc pl-5 text-[#475467] text-[0.9rem] leading-8" aria-live="polite">{ingredientsListItems}</ul>

            {props.ingredients.length > 3 && <div className="bg-[#f0efeb] rounded-lg flex p-[20px] justify-between items-center">
                <div ref={props.ref}>
                    <h3 className="text-[0.9rem] font-medium">Ready for a recipe?</h3>
                    <p className="text-[0.7rem] font-normal text-[#6b7280]">Generate a recipe from your list of ingredients.</p>
                </div>
                <button className="bg-[#d17557] text-[#fafaf8] text-[0.7rem] px-[17px] py-[7px] rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] cursor-pointer" onClick={props.toggleRecipe}>Get a recipe</button>
            </div>}

        </section>
    )
}

export default IngredientsList;