import React, { useState, useEffect } from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { getCategories, deleteCategory } from '../../../services/categories';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const ListCategory = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(5); // Number of categories per page
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  useEffect(() => {
    const fetchCategories = () => {
      getCategories('http://localhost:3001/api', setCategories, setError);
    };

    fetchCategories();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa danh mục này không?")) {
      deleteCategory(
        id,
        (data) => {
          toast.success("Danh mục đã được xóa thành công.");
          // Refresh the list of categories after successful deletion
          getCategories('http://localhost:3001/api', setCategories, setError);
        },
        (errorMessage) => {
          toast.error(errorMessage);
        }
      );
    }
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter categories based on search query
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the categories to display for the current page
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstCategory, indexOfLastCategory);

  // Calculate total pages
  const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);

  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-sm-11" style={{ position: "relative", left: "241px" }}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Danh Sách Danh Mục</h4>
              <span><a href='/admin/addCategory' className="btn btn-primary mb-3">Thêm Danh Mục</a></span>

              {/* Search Input */}
              <div className="search-bar mb-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="form-control "
                  placeholder="Tìm kiếm danh mục..."   style={{
                    padding: "0.25rem 0.5rem",  // Thay đổi kích thước padding
                    fontSize: "0.875rem",        // Thay đổi kích thước font
                    borderRadius: "0.2rem",      // Thay đổi bo tròn góc nếu cần
                    width: "200px"               // Đặt kích thước chiều rộng cho input
                  }}
                />
              </div>

              <div className="table-responsive">
                <table className="table user-table">
                  <thead>
<tr><th className="border-top-0">ID</th>
                      <th className="border-top-0">Tên danh mục</th>
                      <th className="border-top-0">Trạng Thái</th>
                      <th className="border-top-0">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentCategories.length > 0 ? (
                      currentCategories.map((category) => (
                        <tr key={category.id}>
                          <td>{category.id}</td>
                          <td>{category.name}</td>
                          <td>
                            <span 
                              className={`badge mb-2 mt-2 ${
                                category.status === 1 ? 'bg-success' : 'bg-danger'
                              }`}
                            >
                              {category.status === 1 ? 'Đang hoạt động' : 'Không hoạt động'}
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <span><a href={`/admin/editCategory/${category.id}`} className="btn btn-primary">Sửa</a></span>
                              <span>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => handleDelete(category.id)}
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
                        <td colSpan="4">Không có danh mục nào</td>
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

            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer /> {/* ToastContainer placed here */}
    </div>
  );
};

export default ListCategory;