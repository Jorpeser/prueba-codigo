import axios from 'axios';

const url = 'http://localhost:8080/news';


export const fetchNews = () => axios.get(url);
export const createNew = (newNew: any) => axios.post(url, newNew)
export const updateNew = (id: string, updatedNew: any) => axios.patch(`${url}/${id}`, updatedNew)
export const deleteNew = (id: string) => axios.delete(`${url}/${id}`)