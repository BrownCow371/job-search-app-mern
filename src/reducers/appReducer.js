export default function appReducer(
    state = {
        loading: false,
        jobs: []
    }, 
    action){
    switch(action.type){
        case 'LOADING_DATA':
            return {...state, loading: true}
        case 'FETCH_JOBS':
            return {...state, jobs: action.payload, loading: false}
        default:
            return state;
    }   
}