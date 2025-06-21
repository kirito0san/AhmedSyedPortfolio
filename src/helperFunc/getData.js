import axios from "axios";

export const getData = async () => {
    try {
        const data = await axios.get("../../../public/Data.json")
        const response = data.data
        return response
    } catch (error) {
        console.log(error);

        return error
    }

}

