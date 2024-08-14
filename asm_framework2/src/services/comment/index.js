export const apiUrl = 'http://localhost:3001/api';

//lấy comment ra để hiển thị
export const getComments = (apiUrl, setCommentsData, setError) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${apiUrl}/comment`, true);
  
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          setCommentsData(response.data); // Giả sử response.data chứa danh sách comments
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
  
  //thêm bình luận
  export const addComment = (commentData, setSuccess, setError) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${apiUrl}/comment`, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          if (typeof setSuccess === 'function') setSuccess(response);
          console.log('Comment đã được thêm thành công:', response);
        } catch (e) {
          console.error('Lỗi phân tích JSON:', e);
          if (typeof setError === 'function') setError('Lỗi phân tích JSON');
        }
      } else {
        try {
          const errorResponse = JSON.parse(xhr.responseText);
          if (xhr.status === 409) { // HTTP 409 Conflict
            if (typeof setError === 'function') setError('Comment đã tồn tại.');
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
  
    xhr.send(JSON.stringify(commentData));
  };

// Xóa bình luận
export const deleteComment = (commentId, setSuccess, setError) => {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `${apiUrl}/comment/${commentId}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          setSuccess(response); // Giả sử response chứa thông tin phản hồi từ server
          console.log('Comment deleted successfully:', response);
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
  