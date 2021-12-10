import { AxiosResponse } from "axios";

import request from "../../helpers/request";


export const getJobsList = (): Promise<AxiosResponse> => request.get('/v1/embed', {
  params: {
    organizationReference: 'Pg4eV6k'
  }
});