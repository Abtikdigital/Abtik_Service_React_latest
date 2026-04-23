import axios from "axios"

const back_end_url = process.env.NEXT_PUBLIC_BACK_END_URL

export const addDownloadApplication = async (formData: any) => {
    try {
        let res = await axios.post(`${back_end_url}/eBook/addDownloadApplication`, formData)
        return res
    } catch (error) {
        throw error
    }
}