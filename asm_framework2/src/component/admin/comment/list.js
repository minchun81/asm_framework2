import React, { useState, useEffect } from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { getComments, deleteComment } from '../../../services/comment'; // Adjust this path if necessary

const ListComments = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(5); // Number of comments per page

  useEffect(() => {
    const fetchComments = () => {
      getComments('http://localhost:3001/api', setComments, setError);
    };

    fetchComments();
  }, []);

  // Function to handle comment deletion
  const handleDelete = (commentId) => {
    // Hiển thị hộp thoại xác nhận
    if (window.confirm("Bạn có chắc chắn muốn xóa bình luận này không?")) {
        // Nếu người dùng xác nhận, tiến hành xóa
        deleteComment(commentId, (response) => {
            // Loại bỏ bình luận đã xóa khỏi danh sách
            setComments(comments.filter(comment => comment.id !== commentId));
        }, (error) => {
            console.error('Delete error:', error);
            setError('Không thể xóa bình luận.');
        });
    }
};


  // Calculate the comments to display for the current page
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  // Calculate total pages
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  return (
    <div className="">
      {/* <!-- Bắt đầu nội dung trang --> */}
      <Header />

      <div className="row">
        <div className="col-sm-11" style={{ position: "relative", left: "241px" }}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Danh Sách Bình Luận</h4>
              <div className="table-responsive">
                <table className="table user-table">
                  <thead>
                    <tr>
                      <th className="border-top-0">ID</th>
                      <th className="border-top-0">Người bình luận</th>
                      <th className="border-top-0">Nội dung</th>
                      <th className="border-top-0">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentComments.length > 0 ? (
                      currentComments.map((comment) => (
                        <tr key={comment.id}>
                          <td>{comment.id}</td>
                          <td>{comment.author || "Ẩn danh"}</td>
                          <td>{comment.content}</td>
                          <td>
                            <div className="d-flex gap-2">
                              <span>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => handleDelete(comment.id)}
                                >
                                  Xóa
                                </button>
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4">Không có bình luận nào</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination Controls */}
              <div className="pagination">
                <button
                  className="btn btn-primary mx-3"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  &lt; Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                  className="btn btn-primary mx-3"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next &gt;
                </button>
              </div>

              {error && <p className="text-danger">{error}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Kết thúc nội dung trang */}
      <Footer />
    </div>
  );
};

export default ListComments;
