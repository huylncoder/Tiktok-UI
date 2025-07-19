import axios from "axios";

// utils nghĩa là công cụ
//Creating an instance - Cấu hình axios tuỳ chỉnh mà sử dụng 
// request gọi đến phương thức get,... gửi đi dữ liệu và nhận về obj axios
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const get = async (path, option = {}) => {
    const response = await httpRequest.get(path, option);
    return response.data;
}


export default httpRequest


