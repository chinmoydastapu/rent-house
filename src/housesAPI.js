import axios from 'axios';

const URL = 'http://localhost:4000';

export async function readAllHouses() {
    let response = await axios.get(`${URL}/houses`);

    if (response.status === 200) {
        return response.data;
    } else {
        return;
    }
}

export async function postHouse(houseObj) {
    let response = await axios.post(`${URL}/houses`, houseObj);
    return response;
}