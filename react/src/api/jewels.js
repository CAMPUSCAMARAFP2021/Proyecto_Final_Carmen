const getJewels = async (jwt, order) => {

    const headers = new Headers();

    headers.append("Authorization", jwt);

    return fetch(`http://localhost:3000/orders/${order._id}/jewels`, {headers})

    .then(res => res.json())

}



const createJewels = async (jewel, jwt, order) => {

    console.log(order)
    const headers = new Headers();

    headers.append("Content-Type", "application/json");

    headers.append("Authorization", jwt);

    const body = JSON.stringify({jewel});

    const requestOptions = {

        method: 'POST', headers, body,redirect: 'follow'

    };

    return fetch(`http://localhost:3000/orders/${order._id}/jewels`, requestOptions)

        .then(response => response.json());

}
const deleteJewel = async (jewel, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/jewels" + jewel._id, requestOptions)
        .then(response => response.text());
}
export {

    getJewels ,

    createJewels,

    deleteJewel

}