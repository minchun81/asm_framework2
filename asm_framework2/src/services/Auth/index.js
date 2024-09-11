import axios from 'axios';

// Đăng nhập
export const login = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:3001/api/login', { username, password });
    // Giả sử API trả về { token: 'your_token', ...otherData }
    return response.data;
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.message || 'Lỗi đăng nhập';
      throw new Error(errorMessage);
    } else {
      throw new Error('Lỗi kết nối mạng');
    }
  }
};
