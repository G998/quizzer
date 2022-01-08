import {Form} from 'semantic-ui-react'
function Answer({onSub}) {
    let temp = '';
    return (
        <Form onSubmit={(e)=>onSub(temp, e)}>
            <Form.Field>
                <label>Answer:</label><br/>
                <input type="text" onChange={(e)=> temp=e.target.value}></input>
            </Form.Field>
            <br/>
            <input type="submit" value="Submit"/>
        </Form>
    )
}

export default Answer