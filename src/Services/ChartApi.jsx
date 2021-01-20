import axios from 'axios'

const API_EMPLOYEES = "https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api"


export const getEmployeesByLimits = (offset = 0, limit = 20) => {
    return axios.get(`${API_EMPLOYEES}?offset=${offset}&limit=${limit}`)
}

export const getEmployeesById = (id) => {
    return  axios.get(`${API_EMPLOYEES}?manager=${id}`)
}