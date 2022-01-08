import Reset from './Reset'
import AutosizeInput from 'react-input-autosize';

function StartReset({start, limit, handleLimit, handleReset, reset, score}) {
    return (
        <div>
            <button onClick={()=> start()}>Start Quiz</button><br/>
            {reset ? 
                <Reset handle={handleReset} score={score} limit={limit}/>
                :
                <AutosizeInput  type="text"  value={limit} onChange={(e)=>handleLimit(e.target.value)}/>
            }
        </div>
    )
}

export default StartReset