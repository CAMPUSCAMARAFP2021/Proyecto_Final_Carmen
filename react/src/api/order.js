const getOrders = async (jwt, customer) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch(`http://localhost:3000/customers/${customer._id}/orders`, {headers})
    .then(res => res.json())
}

const createOrderbycustomer = async (order, jwt, customer) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({order});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch(`http://localhost:3000/customers/${customer._id}/orders`, requestOptions)
        .then(response => response.json());
}

const deleteOrder = async (order, jwt , customer) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch(`http://localhost:3000/customers/${customer._id}/orders/${order._id}` , requestOptions)
        .then(response => response.text());
}

export {
    getOrders ,
    createOrderbycustomer,
    deleteOrder,
}