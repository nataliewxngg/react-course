import ReactMarkdown from 'react-markdown';

function ClaudeRecipe(props) {
    return (
        <section id="recipe" className="my-8">
            { props.loading ? <div class="loader"></div> : <ReactMarkdown>{props.recipe}</ReactMarkdown>}
        </section>
    );
}

export default ClaudeRecipe;