const getOrder = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3000/order", {headers})
    .then(res => res.json())
}

const createOrder = async (order, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({order});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/order", requestOptions)
        .then(response => response.json());
}

const deleteOrder = async (order, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/order/" + order._id, requestOptions)
        .then(response => response.text());
}

export {
    getOrder ,
    createOrder,
    deleteOrder,
}