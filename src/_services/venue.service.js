import { authHeader, handleResponse } from '@/_helpers';

export const venueService = {
    getAll
}

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`https://people-queue.herokuapp.com/list/venue/`, requestOptions).then(handleResponse);

}