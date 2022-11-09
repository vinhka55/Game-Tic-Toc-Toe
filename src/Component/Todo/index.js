import {useRef, useReducer } from "react";
import {addJob, setJob, removeJob} from './actions'
import reducer,{initialState} from "./reducer";

function TodoApp(){
    const [state, dispatch] = useReducer(reducer,initialState)
    const inputRef = useRef()
    const {job, jobs} = state
    const handleAdd = ()=>{
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    return (
        <div>
            <h2>To do</h2>
            <input ref={inputRef} placeholder="enter todo here..." value={job} onChange={(e)=>{dispatch(setJob(e.target.value))}}/>
            <button onClick={()=>handleAdd()}>Add</button>
            <ul>
                {jobs.map((job,index)=><li key={index}>{job} <span onClick={()=>dispatch(removeJob(index))}>xoa</span></li>)}
            </ul>
        </div>     
    )
}
export default TodoApp