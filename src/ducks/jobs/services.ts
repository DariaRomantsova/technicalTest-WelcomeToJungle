import axios, { AxiosResponse } from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

export const getJobsList = (): Promise<AxiosResponse<any, any>> => request.get('/v1/embed', {
  params: {
    organization_reference: 'Pg4eV6k'
  }
});