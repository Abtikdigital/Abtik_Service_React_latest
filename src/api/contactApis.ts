import axios from "axios";
const back_end_url = process.env.NEXT_PUBLIC_BACK_END_URL

export const addContact = async (formData:any) => {
    try {
        let res = await axios.post(`${back_end_url}/contact/addContact`, formData)
        return res
    } catch (error) {
        throw error
    }
}



