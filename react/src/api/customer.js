const login = async (user, password) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = JSON.stringify({user, password});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/customer/login", requestOptions)
        .then(response => response.json());
}
const getCustomers = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3000/customers", {headers})
    .then(res => res.json())
}

const createCustomer = async (customer, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({customer});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/customers", requestOptions)
        .then(response => response.json());
}

export {
    login,
    getCustomers,
    createCustomer,
};