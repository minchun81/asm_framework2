// services/product.js
export const apiUrl = 'http://localhost:3001/api';

// Lấy danh sách người dùng
export const getProduct = (apiUrl, setProductData, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${apiUrl}/product`, true);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setProductData(response.data); // Giả sử response.data chứa danh sách người dùng
        console.log('Fetched product:', response.data);
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
export const addProduct = (productData, setSuccess, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${apiUrl}/product`, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setSuccess(response); // Giả sử response chứa thông tin phản hồi từ server
        console.log('product added successfully:', response);
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

  xhr.send(JSON.stringify(productData));
};

// Xóa người dùng
export const deleteProduct = (productId, setSuccess, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `${apiUrl}/product/${productId}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setSuccess(response); // Giả sử response chứa thông tin phản hồi từ server
        console.log('product deleted successfully:', response);
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
export const updateProduct = (productId, productData, setSuccess, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `${apiUrl}/product/${productId}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setSuccess(response); // Giả sử response chứa thông tin phản hồi từ server
        console.log('product updated successfully:', response);
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
  xhr.send(JSON.stringify(productData));
};
// Lấy thông tin người dùng theo ID
export const getProductById = (id, setProductData, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${apiUrl}/product/${id}`, true);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setProductData(response.data); // Giả sử response.data chứa thông tin người dùng
        console.log('Fetched product:', response.data);
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
