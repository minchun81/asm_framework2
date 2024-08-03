// src/Footer.js
import React from 'react';
// import './Footer.css'; // Bạn có thể tạo file CSS này nếu cần thiết

const Footer = () => {
    return (
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box about-widget">
                                <h2 className="widget-title">Về chúng tôi</h2>
                                <p>Chúng tôi cung cấp các sản phẩm chất lượng cao với dịch vụ tốt nhất. Tất cả các sản phẩm của chúng tôi đều được chọn lọc kỹ lưỡng để đáp ứng nhu cầu của khách hàng.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box get-in-touch">
                                <h2 className="widget-title">Liên hệ</h2>
                                <ul>
                                    <li>34/8, Đông Hukupara, Gifirtok, Sadan.</li>
                                    <li>support@fruitkha.com</li>
                                    <li>+00 111 222 3333</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box pages">
                                <h2 className="widget-title">Trang</h2>
                                <ul>
                                    <li><a href="index.html">Trang chủ</a></li>
                                    <li><a href="about.html">Về chúng tôi</a></li>
                                    <li><a href="services.html">Cửa hàng</a></li>
                                    <li><a href="news.html">Tin tức</a></li>
                                    <li><a href="contact.html">Liên hệ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box subscribe">
                                <h2 className="widget-title">Đăng ký</h2>
                                <p>Đăng ký nhận thông tin mới nhất từ chúng tôi.</p>
                                <form action="index.html">
                                    <input type="email" placeholder="Email" />
                                    <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p>Bản quyền &copy; 2019 - <a href="https://imransdesign.com/">Imran Hossain</a>, Đã đăng ký bản quyền.<br />
                                Phân phối bởi - <a href="https://themewagon.com/">Themewagon</a>
                            </p>
                        </div>
                        <div className="col-lg-6 text-right col-md-12">
                            <div className="social-icons">
                                <ul>
                                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
