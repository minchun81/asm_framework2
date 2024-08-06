// services/user.js
export const apiUrl = 'http://localhost:3000/api/user';

// Lấy danh sách người dùng
export const getUsers = (apiUrl, setUsersData, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${apiUrl}`, true);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setUsersData(response.data); // Giả sử response.data chứa danh sách người dùng
        console.log('Fetched users:', response.data);
      } catch (e) {
        console.error('Error parsing JSON:', e);
        setError('Error parsing JSON');
      }
    } else {
      console.error('HTTP error:', xhr.status);
      setError(`HTTP error! status: ${xhr.status}`);
    }
  };

  xhr.onerror = () => {
    console.error('Network error');
    setError('Network error');
  };

  xhr.send();
};

// Thêm người dùng
export const addUsers = (userData, setSuccess, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${apiUrl}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setSuccess(response); // Giả sử response chứa thông tin phản hồi từ server
        console.log('User added successfully:', response);
      } catch (e) {
        console.error('Error parsing JSON:', e);
        setError('Error parsing JSON');
      }
    } else {
      console.error('HTTP error:', xhr.status);
      setError(`HTTP error! status: ${xhr.status}`);
    }
  };

  xhr.onerror = () => {
    console.error('Network error');
    setError('Network error');
  };

  xhr.send(JSON.stringify(userData));
};
// Xóa người dùng
export const deleteUser = (userId, setSuccess, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `${apiUrl}/${userId}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setSuccess(response); // Giả sử response chứa thông tin phản hồi từ server
        console.log('User deleted successfully:', response);
      } catch (e) {
        console.error('Error parsing JSON:', e);
        setError('Error parsing JSON');
      }
    } else {
      console.error('HTTP error:', xhr.status);
      setError(`HTTP error! status: ${xhr.status}`);
    }
  };

  xhr.onerror = () => {
    console.error('Network error');
    setError('Network error');
  };

  xhr.send();
};

// Cập nhật thông tin người dùng
export const updateUser = (userId, userData, setSuccess, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `${apiUrl}/${userId}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setSuccess(response); // Giả sử response chứa thông tin phản hồi từ server
        console.log('User updated successfully:', response);
      } catch (e) {
        console.error('Error parsing JSON:', e);
        setError('Error parsing JSON');
      }
    } else {
      console.error('HTTP error:', xhr.status);
      setError(`HTTP error! status: ${xhr.status}`);
    }
  };

  xhr.onerror = () => {
    console.error('Network error');
    setError('Network error');
  };

  // Gửi dữ liệu người dùng dưới dạng JSON
  xhr.send(JSON.stringify(userData));
};
// Lấy thông tin người dùng theo ID
export const getUserById = (userId, setUserData, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${apiUrl}/${userId}`, true);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setUserData(response.data); // Giả sử response.data chứa thông tin người dùng
        console.log('Fetched user:', response.data);
      } catch (e) {
        console.error('Error parsing JSON:', e);
        setError('Error parsing JSON');
      }
    } else {
      console.error('HTTP error:', xhr.status);
      setError(`HTTP error! status: ${xhr.status}`);
    }
  };

  xhr.onerror = () => {
    console.error('Network error');
    setError('Network error');
  };

  xhr.send();
};