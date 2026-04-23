import axios from "axios";
const back_end_url = process.env.NEXT_PUBLIC_BACK_END_URL;

export const addApplication = async (data: any,multipart:any) => {
  try {
    let res = await axios.post(`${back_end_url}/career/addApplication`, data,multipart);
    return res;
  } catch (error) {
    throw error;
  }
};
