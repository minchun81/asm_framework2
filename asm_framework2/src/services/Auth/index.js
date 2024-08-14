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

// Lấy thông tin người dùng từ API
export const getProfile = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/profile', {
      withCredentials: true // Đảm bảo gửi cookie với yêu cầu
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.message || 'Lỗi khi lấy thông tin người dùng';
      throw new Error(errorMessage);
    } else {
      throw new Error('Lỗi kết nối mạng');
    }
  }
};
