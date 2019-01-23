

export function fetchJobs(){
    return (dispatch) => {
        dispatch({type: 'LOADING_DATA'});
        return fetch(`/api/jobs`, {
            method: 'GET',
            headers:{ 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(jobs => dispatch({type: 'FETCH_JOBS', payload: jobs}))
    }
}