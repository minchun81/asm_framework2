import React, { useState, useEffect } from "react";
import Header from './header';
import Footer from './footer';
import { getProduct } from "../../services/product";

const Shop = () => {
  const [products, setProducts] = useState([]); // Khởi tạo là mảng rỗng
  const [filteredProducts, setFilteredProducts] = useState([]); // Khởi tạo là mảng rỗng
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProduct("http://localhost:3001/api", setProducts, setError);
        setFilteredProducts(data || []);
        // Giả sử có API để lấy danh mục
        // const categoriesData = await getCategories("http://localhost:3001/api/categories");
        // setCategories(categoriesData || []);
      } catch (err) {
        setError("Error fetching products");
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let results = (products || []).filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (selectedCategory) {
      results = results.filter(product => product.category === selectedCategory);
    }
    setFilteredProducts(results);
  }, [searchTerm, selectedCategory, products]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = (filteredProducts || []).slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil((filteredProducts || []).length / productsPerPage);

  return (
    <>
      <Header />
      {/* Khu vực tìm kiếm */}
      <div className="search-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="close-btn"><i className="fas fa-window-close"></i></span>
              <div className="search-bar">
                <div className="search-bar-tablecell">
                  <h3>Tìm kiếm:</h3>
                  <input
                    type="text"
                    placeholder="Từ khóa"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    type="submit"
                    style={{ padding: '5px 15px', fontSize: '14px' }}
                  >
                    Tìm kiếm <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần Breadcrumb */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Tươi và Hữu cơ</p>
                <h1>Cửa hàng</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Danh mục sản phẩm */}
      <div className="product-categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-filters">
                <ul>
                  <li className={!selectedCategory ? "active" : ""} onClick={() => setSelectedCategory('')}>Tất cả</li>
                  {categories.map((category) => (
                    <li key={category.id} className={selectedCategory === category.name ? "active" : ""} onClick={() => setSelectedCategory(category.name)}>
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Các sản phẩm */}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row product-lists">
            {currentProducts.length > 0 ? (
              currentProducts.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 text-center">
                  <div className="single-product-item">
                    <div className="product-image">
                      <a href={`/product/${item.id}`}>
                        <img src={`http://localhost:3001/uploads/${item.image}`} alt={item.name} />
                      </a>
                    </div>
                    <h3>{item.name}</h3>
                    <p className="product-price"><span>Giá mỗi Kg</span> {item.price}$</p>
                    <a href={`/cart`} className="cart-btn"><i className="fas fa-shopping-cart"></i> Thêm vào giỏ</a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-lg-12 text-center">
                <p>Không có sản phẩm nào</p>
              </div>
            )}
          </div>

          {/* Phân trang */}
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="pagination-wrap">
                <ul>
                  <li><a onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Trước</a></li>
                  {[...Array(totalPages)].map((_, i) => (
                    <li key={i} onClick={() => setCurrentPage(i + 1)}>
                      <a className={currentPage === i + 1 ? "active" : ""}>{i + 1}</a>
                    </li>
                  ))}
                  <li><a onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>Tiếp theo</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
