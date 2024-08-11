import React, { useState, useEffect } from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { getCategories } from '../../../services/categories';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ListCategorys = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(5); // Số lượng danh mục mỗi trang

  useEffect(() => {
    const fetchCategories = () => {
      getCategories('http://localhost:3001/api', setCategories, setError);
    };

    fetchCategories();
  }, []);

  // Tính toán các danh mục hiển thị cho trang hiện tại
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);

  // Tính tổng số trang
  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  // Tính toán thống kê danh mục
  const totalCategories = categories.length;
  const activeCategories = categories.filter(category => category.status === 1).length;
  const inactiveCategories = totalCategories - activeCategories;

  // Dữ liệu cho biểu đồ hình tròn
  const doughnutData = {
    labels: ['Đang hoạt động', 'Không hoạt động'],
    datasets: [
      {
        data: [activeCategories, inactiveCategories],
        backgroundColor: ['#28a745', '#dc3545'],
        hoverBackgroundColor: ['#218838', '#c82333']
      }
    ]
  };

  // Dữ liệu cho biểu đồ cột
  const barData = {
    labels: categories.map(category => category.name),
    datasets: [
      {
        label: 'Trạng thái danh mục',
        data: categories.map(category => category.status),
        backgroundColor: categories.map(category => (category.status === 1 ? '#28a745' : '#dc3545')),
        borderColor: '#fff',
        borderWidth: 1
      }
    ]
  };

  // Tùy chọn cho biểu đồ cột
  const barOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: '#000'
        },
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          color: '#000',
          beginAtZero: true
        },
        grid: {
          color: '#e0e0e0'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ': ' + (context.raw === 1 ? 'Đang hoạt động' : 'Không hoạt động');
          }
        }
      }
    }
  };

  return (
    <div className="">
      {/* Bắt đầu nội dung trang */}
      <Header />

      <div className="row">
        <div className="col-sm-11" style={{ position: "relative", left: "241px" }}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Thống Kê Danh Mục</h4>

              {/* Hiển thị thống kê danh mục */}
              <div className="row mb-3">
                <div className="col-md-4">
                  <div className="card text-white bg-info mb-3">
                    <div className="card-header">Tổng số danh mục</div>
                    <div className="card-body">
                      <h5 className="card-title">{totalCategories}</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">Danh mục đang hoạt động</div>
                    <div className="card-body">
                      <h5 className="card-title">{activeCategories}</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-white bg-danger mb-3">
                    <div className="card-header">Danh mục không hoạt động</div>
                    <div className="card-body">
                      <h5 className="card-title">{inactiveCategories}</h5>
                    </div>
                  </div>
                </div>
              </div>

              {/* Biểu đồ hình tròn và biểu đồ cột */}
              <div className="row mb-3">
                <div className="col-md-6" style={{ maxWidth: '300px', margin: '0 auto' }}>
                  <Doughnut data={doughnutData} />
                </div>
                <div className="col-md-6" style={{ maxWidth: '500px', margin: '0 auto' }}>
                  <Bar data={barData} options={barOptions} />
                </div>
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

export default ListCategorys;
