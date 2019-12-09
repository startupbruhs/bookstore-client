import axios from "axios";
import { URL } from "../configs/site/index";

export const getAllBooks = async () => await axios.get(URL);

export const getBookById = async id => {
  return await axios.get(`${URL}?id=${id}`);
};
