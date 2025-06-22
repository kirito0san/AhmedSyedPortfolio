import axios from "axios";

export const getData = async () => {
    try {
        const data = await axios.get("./Data.json", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            withCredentials: false,

        })
        const response = data.data
        return response
    } catch (error) {
        console.log(error);

        return error
    }

}

