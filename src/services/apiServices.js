import axios from 'axios';

const BASE_URL = 'https://aviasales-test-api.kata.academy/';

const request = async (url) => {
  try {
    const res = await axios.get(url);
    if (res.status !== 200) {
      throw new Error(`Ошибка запроса ${res.message}`);
    }
    return res.data;
  } catch (error) {
    throw new Error(`Ошибка запроса ${error.message}`);
  }
};

export const getKey = async () => {
  const url = `${BASE_URL}search`;
  const data = await request(url);
  return data;
};

export const getTickets = async (searchId) => {
  const url = `${BASE_URL}tickets?searchId=${searchId}`;
  const data = await request(url);
  return data;
};
