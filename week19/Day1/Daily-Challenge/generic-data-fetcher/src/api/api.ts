import axios, { AxiosRequestConfig } from 'axios';

export const fetchData = async <T>(url: string, options: AxiosRequestConfig): Promise<T> => {
  //Função genérica para buscar dados de uma API
  const response = await axios.get<T>(url, options);
  return response.data;
};