

export function fetchCompanies(){
    return (dispatch) => {
        dispatch({type: 'LOADING_DATA'});
        return fetch(`/api/companies`, {
            method: 'GET',
            headers:{ 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(companies => dispatch({type: 'FETCH_COMPANIES', payload: companies}))
    }
}

export function addCompany(requestData){
    return (dispatch) => {
        dispatch({type: 'LOADING_DATA'});
        return fetch(`/api/companies`, {
            method: 'POST',
            headers:{ 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(company => dispatch({type: 'ADD_COMPANY', payload: company}))
    }
}