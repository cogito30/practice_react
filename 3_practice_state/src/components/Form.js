export default function Form({
    status = 'empty'
}) {
    if (status === 'success') {
        return (
            <h1>That's Correct</h1>
        );
    }

    return (
        <>
            <h2>Quiz</h2>
            <p>Where are you from?</p>
            <form>
                <textarea disabled = {
                    status === 'submitting'
                }
                />
                <br />
                <button disabled={
                    status === 'empty' ||
                    status === 'submitting'
                }>Submit</button>
                {
                    status === 'error' && 
                    <p className="Error">
                        Wrong Answer! Try Again.
                    </p>
                }
            </form>
        </>
    );
}