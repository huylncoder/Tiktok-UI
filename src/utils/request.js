import axios from "axios";

// utils nghĩa là công cụ
//Creating an instance - Cấu hình axios tuỳ chỉnh mà sử dụng 
// request gọi đến phương thức get,... gửi đi dữ liệu và nhận về obj axios
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
})

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
}


export default request
