import API from './webapi.services';
import { BASE_URL } from './urls';

export const getCarrinho = async () => {
  try {
    const response = await API.get(`${BASE_URL}/carrinho`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCarrinhoItem = async (itemId) => {
  try {
      const response = await API.get(`${BASE_URL}/carrinho/${itemId}`);
      return response.data;
  } catch (error) {
      console.log(error);
      return null;
  }
};

export const insertCarrinhoItem = async (item) => {
  try {
    const response = await API.post(`${BASE_URL}/carrinho`, item);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateCarrinhoItem = async (item) => {
  try {
    const response = await API.put(`${BASE_URL}/carrinho/${item.id}`, item);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const deleteCarrinhoItem = async (item) => {
  try {
    const response = await API.delete(`${BASE_URL}/carrinho/${item.id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};