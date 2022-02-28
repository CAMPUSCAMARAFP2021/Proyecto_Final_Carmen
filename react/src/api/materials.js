const getMaterial = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3000/materials", {headers})
    .then(res => res.json())
}

const createMaterial = async (material, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({material});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/materials", requestOptions)
        .then(response => response.json());
}

const deleteMaterial = async (material, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/materials/" + material._id, requestOptions)
        .then(response => response.text());
}

export {
    getMaterial ,
    createMaterial,
    deleteMaterial,
}