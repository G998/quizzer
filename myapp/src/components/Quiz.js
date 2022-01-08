import Header from './Header'
import Answer from './Answer'

function Quiz({counter, word, score, limit, onSubmit}) {
    return (
        <>
            <Header  counter={counter} word={word} score={score} limit={limit}/>
            <Answer onSub={onSubmit}/>
        </>
    )
}
export default Quiz
