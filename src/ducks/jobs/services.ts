import axios from "axios";

export const getJobsList = () =>
  axios.get('https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k');
