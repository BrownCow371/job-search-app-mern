export default function appReducer(
    state = {
        loading: false,
        jobs: [],
        companies: [],
    }, 
    action){
    switch(action.type){
        case 'LOADING_DATA':
            return {...state, loading: true}
        case 'FETCH_JOBS':
            return {...state, jobs: action.payload, loading: false}
        case 'FETCH_COMPANIES':
            return {...state, companies: action.payload, loading: false}
        case 'ADD_COMPANY':
            return {...state, companies: [...state.companies, action.payload], loading: false}   
        default:
            return state;
    }   
}