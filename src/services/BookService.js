import axios from "axios";
import { URL } from "../configs/site";

const base = "books";
export const getAllBooks = async () => await axios.get(`${URL}/${base}`);

export const getBookById = async id => {
  return await axios.get(`${URL}/${base}/?id=${id}`);
};
