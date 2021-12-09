import axios, { AxiosResponse } from "axios";

export const getJobsList = ():Promise<AxiosResponse<any, any>> =>
  axios.get('https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k');
