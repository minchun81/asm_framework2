export const apiUrl = 'http://localhost:3000/api';

// Lấy danh mục với phân trang tùy chọn
export const getCategories = (apiUrl, setCategoriesData, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${apiUrl}/category`, true);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setCategoriesData(response.data); // Giả sử response.data chứa danh sách danh mục
      } catch (e) {
        console.error('Error parsing JSON:', e);
        if (typeof setError === 'function') setError('Error parsing JSON');
      }
    } else {
      console.error('HTTP error:', xhr.status);
      if (typeof setError === 'function') setError(`HTTP error! status: ${xhr.status}`);
    }
  };

  xhr.onerror = () => {
    console.error('Network error');
    if (typeof setError === 'function') setError('Network error');
  };

  xhr.send();
};

// Thêm danh mục mới

export const addCategory = (categoryData, setSuccess, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${apiUrl}/category`, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        if (typeof setSuccess === 'function') setSuccess(response);
        console.log('Danh mục đã được thêm thành công:', response);
      } catch (e) {
        console.error('Lỗi phân tích JSON:', e);
        if (typeof setError === 'function') setError('Lỗi phân tích JSON');
      }
    } else {
      try {
        const errorResponse = JSON.parse(xhr.responseText);
        if (xhr.status === 409) { // HTTP 409 Conflict
          if (typeof setError === 'function') setError('Danh mục đã tồn tại.');
        } else {
          if (typeof setError === 'function') setError(errorResponse.message || `Lỗi HTTP! mã: ${xhr.status}`);
        }
      } catch (e) {
        console.error('Lỗi phân tích JSON:', e);
        if (typeof setError === 'function') setError('Lỗi phân tích JSON');
      }
    }
  };

  xhr.onerror = () => {
    console.error('Lỗi mạng');
    if (typeof setError === 'function') setError('Lỗi mạng');
  };

  xhr.send(JSON.stringify(categoryData));
};

// Cập nhật danh mục
export const updateCategory = (id, data, setSuccess, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `${apiUrl}/category/${id}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        if (typeof setSuccess === 'function') setSuccess(response); // Giả sử response chứa thông tin phản hồi từ server
      } catch (e) {
        console.error('Error parsing JSON:', e);
        if (typeof setError === 'function') setError('Error parsing JSON');
      }
    } else {
      console.error('HTTP error:', xhr.status);
      if (typeof setError === 'function') setError(`HTTP error! status: ${xhr.status}`);
    }
  };

  xhr.onerror = () => {
    console.error('Network error');
    if (typeof setError === 'function') setError('Network error');
  };

  xhr.send(JSON.stringify(data));
};
