import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error.message);
        return toast(error.message);
    }
);

export default axiosInstance;
