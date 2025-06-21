import axios from "axios";

export const getData = async () => {
    const data = await axios.get("../../../public/Data.json")
    try {
        const response = data.data
        return response
    } catch (error) {
        return error
    }

}

