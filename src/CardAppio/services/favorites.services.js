import API from './webapi.services';
import {BASE_URL } from './urls';

export const getFavorites = async (item) => {

    try{

        return await API.get(`${BASE_URL}/favorites`, item).then(
            response => { 
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );

    } catch(error) {
        console.log(error);
        return null;
    }
}

export const insertFavorites = async (item) => {

    try{

        return await API.post(`${BASE_URL}/favorites`, item).then(
            response => { 
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );

    } catch(error) {
        console.log(error);
        return null;
    }
}

export const getFavoritesItem = async (itemId) => {
    try {
        const response = await API.get(`${BASE_URL}/favorites/${itemId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updateFavorites = async (item) => {

    try{

        return await API.put(`${BASE_URL}/favorites/${item.id}`, item).then(
            response => { 
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );

    } catch(error) {
        console.log(error);
        return null;
    }
}

export const deleteFavorites = async (item) => {

    try{

        return await API.delete(`${BASE_URL}/favorites/${item.id}`).then(
            response => { 
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );

    } catch(error) {
        console.log(error);
        return null;
    }
}