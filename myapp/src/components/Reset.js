function Reset({handle, score, limit}) {
    const percent = (score, total)=> {
        return Math.floor((score/total) * 100);
    }
    return (
        <>
            <input type="button" value="Reset" onClick={()=>handle()}/><br/>
            <label>Score: {percent(score, limit)}%</label>
        </>
    )
}
export default Reset