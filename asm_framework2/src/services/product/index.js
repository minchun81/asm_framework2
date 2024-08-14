// services/product.js
export const apiUrl = 'http://localhost:3001/api';

// Lấy danh sách sản phẩm
export const getProduct = (apiUrl, setProductData, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${apiUrl}/product`, true);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setProductData(response.data); // Giả sử response.data chứa danh sách sản phẩm
        console.log('Fetched product:', response.data);
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

// Thêm sản phẩm
export const addProduct = (productData, setSuccess, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${apiUrl}/product`, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setSuccess(response); // Giả sử response chứa thông tin phản hồi từ server
        console.log('Product added successfully:', response);
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

  xhr.send(JSON.stringify(productData));
};

// Xóa sản phẩm
export const deleteProduct = (productId, setSuccess, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `${apiUrl}/product/${productId}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setSuccess(response); // Giả sử response chứa thông tin phản hồi từ server
        console.log('Product deleted successfully:', response);
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

// Cập nhật thông tin sản phẩm
export const updateProduct = (productId, productData, setSuccess, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `${apiUrl}/product/${productId}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setSuccess(response); // Giả sử response chứa thông tin phản hồi từ server
        console.log('Product updated successfully:', response);
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

  xhr.send(JSON.stringify(productData));
};

// Lấy thông tin sản phẩm theo ID
export const getProductById = (id, setProductData, setError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${apiUrl}/product/${id}`, true);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        setProductData(response.data); // Giả sử response.data chứa thông tin sản phẩm
        console.log('Fetched product:', response.data);
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
