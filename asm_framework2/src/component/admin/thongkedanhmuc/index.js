import React, { useState, useEffect } from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { getCategories } from '../../../services/categories';
import { getProduct } from '../../../services/product';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const StatsPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        await getCategories('http://localhost:3001/api', setCategories, setError);
        // Fetch products
        await getProduct('http://localhost:3001/api', setProducts, setError);
      } catch (err) {
        setError("An error occurred while fetching data");
      }
    };

    fetchData();
  }, []);

  // Categories statistics
  const totalCategories = categories.length;
  const activeCategories = categories.filter(category => category.status === 1).length;
  const inactiveCategories = totalCategories - activeCategories;

  const doughnutDataCategories = {
    labels: ['Đang hoạt động', 'Không hoạt động'],
    datasets: [
      {
        data: [activeCategories, inactiveCategories],
        backgroundColor: ['#28a745', '#dc3545'],
        hoverBackgroundColor: ['#218838', '#c82333']
      }
    ]
  };

  const barDataCategories = {
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

  const barOptionsCategories = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: '#000' },
        grid: { display: false }
      },
      y: {
        ticks: { color: '#000', beginAtZero: true },
        grid: { color: '#e0e0e0' }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ': ' + (context.raw === 1 ? 'Đang hoạt động' : 'Không hoạt động');
          }
        }
      }
    }
  };

  // Products statistics
  const totalProducts = products.length;
  const activeProducts = products.filter(product => product.status === 1).length;
  const inactiveProducts = totalProducts - activeProducts;

  const doughnutDataProducts = {
    labels: ['Có sẵn', 'Hết hàng'],
    datasets: [
      {
        data: [activeProducts, inactiveProducts],
        backgroundColor: ['#007bff', '#6c757d'],
        hoverBackgroundColor: ['#0056b3', '#5a6268']
      }
    ]
  };

  const barDataProducts = {
    labels: products.map(product => product.name),
    datasets: [
      {
        label: 'Trạng thái sản phẩm',
        data: products.map(product => product.status),
        backgroundColor: products.map(product => (product.status === 1 ? '#007bff' : '#6c757d')),
        borderColor: '#fff',
        borderWidth: 1
      }
    ]
  };

  const barOptionsProducts = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: '#000' },
        grid: { display: false }
      },
      y: {
        ticks: { color: '#000', beginAtZero: true },
        grid: { color: '#e0e0e0' }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ': ' + (context.raw === 1 ? 'Có sẵn' : 'Hết hàng');
          }
        }
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h4 className="my-4">Thống Kê Danh Mục và Sản Phẩm</h4>

        {/* Categories statistics */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Danh Mục</h5>

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

            <div className="row mb-3">
              <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '200px', height: '200px' }}>
                  <Doughnut data={doughnutDataCategories} />
                </div>
              </div>
              <div className="col-md-6">
                <Bar data={barDataCategories} options={barOptionsCategories} />
              </div>
            </div>
          </div>
        </div>

        {/* Products statistics */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Sản Phẩm</h5>

            <div className="row mb-3">
              <div className="col-md-4">
                <div className="card text-white bg-primary mb-3">
                  <div className="card-header">Tổng số sản phẩm</div>
                  <div className="card-body">
                    <h5 className="card-title">{totalProducts}</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-white bg-success mb-3">
                  <div className="card-header">Sản phẩm còn hàng</div>
                  <div className="card-body">
                    <h5 className="card-title">{activeProducts}</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-white bg-danger mb-3">
                  <div className="card-header">Sản phẩm hết hàng</div>
                  <div className="card-body">
                    <h5 className="card-title">{inactiveProducts}</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '200px', height: '200px' }}>
                  <Doughnut data={doughnutDataProducts} />
                </div>
              </div>
              <div className="col-md-6">
                <Bar data={barDataProducts} options={barOptionsProducts} />
              </div>
            </div>
          </div>
        </div>

        {error && <p className="text-danger">{error}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default StatsPage;
