//initState
export const initialState = {
    job:'',
    jobs:[]
}
//Reducer
const reducer = (state, action) =>{
    switch (action.type) {
        case 'set_job':
            return {
                ...state,job:action.payload
            }
        case 'add_job':
            return {
                ...state, jobs:[...state.jobs,action.payload]
            }
        case 'remove_job':
            const newJobs = [...state.jobs]          
            newJobs.splice(action.payload,1);

            return {
                ...state,jobs:newJobs
            }
        default:
            return new Error('action invalid')
    }
}
export default reducer