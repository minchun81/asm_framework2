
import React, { useState, useEffect } from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { getProduct, deleteProduct } from "../../../services/product";

import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer và toast
import 'react-toastify/dist/ReactToastify.css'; // Import css cho toast

const getStatusDisplay = (status) => {
  switch (status) {
    case 1:
      return { text: "Còn hàng", className: "status-active" };
    case 0:
      return { text: "Hết hàng", className: "status-inactive" };
    default:
      return { text: "Unknown", className: "status-unknown" };
  }
};

// Hàm định dạng giá tiền
const formatPrice = (price) => {
  // Ensure price is a number before formatting
  const numericPrice = Number(price);
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numericPrice);
};

const ListProduct = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(5); // Number of products per page

  useEffect(() => {
    getProduct("http://localhost:3001/api", setProduct, (error) => {
      toast.error('Failed to fetch products'); // Show error message
      setError(error);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(
        id,
        (response) => {
          toast.success('Product deleted successfully'); // Show success message
          // Làm mới danh sách sản phẩm sau khi xóa thành công
          getProduct("http://localhost:3001/api", setProduct, (error) => {
            toast.error('Failed to refresh products'); // Show error message
            setError(error);
          });
        },
        (error) => {
          toast.error('Failed to delete product'); // Show error message
          setSuccessMessage(""); // Xóa bất kỳ thông báo thành công nào trước đó
          setError(error);
        }
      );
    }
  };

  // Get current products
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = product.slice(indexOfFirstProduct, indexOfLastProduct);

  // Tính tổng số trang
  const totalPages = Math.ceil(product.length / productPerPage);

  return (
    <div>
      <Header />
      <div className="page-wrapper">
        <div className="row">
          <div className="col-sm-12" style={{ width: "82%", position: "relative", left: "141px" }}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Danh Sách Sản Phẩm</h4>
                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}
                {error && <div className="alert alert-danger">{error}</div>}
                <span>
                  <a href="/admin/addProduct" className="btn btn-primary mb-3">
                    Thêm Sản Phẩm
                  </a>
                </span>

                <div className="table-responsive">
                  <table className="table product-table">
                    <thead>
                      <tr>
                        <th className="border-top-0">ID</th>
                        <th className="border-top-0">Tên</th>
                        <th className="border-top-0">Danh Mục</th>
                        <th className="border-top-0">Giá</th>
                        <th className="border-top-0">Hình Ảnh</th>
                        <th className="border-top-0">Mô Tả</th>
                        <th className="border-top-0">Trạng Thái</th>
                        <th className="border-top-0">Hành Động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentProduct.length > 0 ? (
                        currentProduct.map((product) => {
                          const { text, className } = getStatusDisplay(product.status);
                          return (
                            <tr key={product.id}>
                              <td>{product.id}</td>
                              <td>{product.name}</td>
                              <td>{product.category_id}</td>
                              <td>{formatPrice(product.price)}</td>
                              <td>
                                <img src={product.image} alt={product.name} style={{ width: '100px', height: 'auto' }} />
                              </td>
                              <td>{product.description}</td>
                              <td className={className}>{text}</td>
                              <td>
                                <div className="d-flex gap-2">
                                  <span>
                                    <a
                                      href={`/admin/editProduct/${product.id}`}
                                      className="btn btn-primary"
                                    >
                                      Sửa
                                    </a>
                                  </span>
                                  <span>
                                    <button
                                      className="btn btn-danger"
                                      onClick={() => handleDelete(product.id)}
                                    >
                                      Xóa
                                    </button>
                                  </span>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan="8">Không có sản phẩm nào</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="pagination">
                  <button
                    className="btn btn-primary mx-3"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    &lt; Previous
                  </button>
                  <span>Page {currentPage} of {totalPages}</span>
                  <button
                    className="btn btn-primary mx-3"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer /> {/* Add ToastContainer here */}
    </div>
  );
};

export default ListProduct;
