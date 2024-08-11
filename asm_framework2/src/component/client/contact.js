// src/Contact.js
import React from 'react';
import Footer from './footer';
import Header from './header';
// Ensure to have the relevant styles in this CSS file

const Contact = () => {
  return (
    <>
    <Header/>
      {/* Khu vực tìm kiếm */}
      <div className="search-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="close-btn"><i className="fas fa-window-close"></i></span>
              <div className="search-bar">
                <div className="search-bar-tablecell">
                  <h3>Tìm kiếm:</h3>
                  <input type="text" placeholder="Từ khóa" />
                  <button type="submit">Tìm kiếm <i className="fas fa-search"></i></button>
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
                <p>Hỗ trợ 24/7</p>
                <h1>Liên hệ với chúng tôi</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần Form Liên Hệ */}
      <div className="contact-from-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="form-title">
                <h2>Bạn có câu hỏi nào không?</h2>
              </div>
              <div id="form_status"></div>
              <div className="contact-form">
                <form type="POST" id="fruitkha-contact" onSubmit={(e) => e.preventDefault()}>
                  <p>
                    <input type="text" placeholder="Họ tên" name="name" id="name" />
                    <input type="email" placeholder="Email" name="email" id="email" />
                  </p>
                  <p>
                    <input type="tel" placeholder="Số điện thoại" name="phone" id="phone" />
                    <input type="text" placeholder="Chủ đề" name="subject" id="subject" />
                  </p>
                  <p><textarea name="message" id="message" cols="30" rows="10" placeholder="Tin nhắn"></textarea></p>
                  <input type="hidden" name="token" value="FsWga4&@f6aw" />
                  <p><input type="submit" value="Gửi" /></p>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-form-wrap">
                <div className="contact-form-box">
                  <h4><i className="fas fa-map"></i> Địa chỉ cửa hàng</h4>
                  <p>34/8, Đông Hukupara <br /> Gifirtok, Sadan. <br /> Tên quốc gia</p>
                </div>
                <div className="contact-form-box">
                  <h4><i className="far fa-clock"></i> Giờ làm việc</h4>
                  <p>TỪ THỨ HAI - THỨ SÁU: 8 đến 9 PM <br /> THỨ BẢY - CHỦ NHẬT: 10 đến 8 PM</p>
                </div>
                <div className="contact-form-box">
                  <h4><i className="fas fa-address-book"></i> Liên hệ</h4>
                  <p>Điện thoại: +00 111 222 3333 <br /> Email: support@fruitkha.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tìm vị trí của chúng tôi */}
      <div className="find-location blue-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p><i className="fas fa-map-marker-alt"></i> Tìm vị trí của chúng tôi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Phần Bản đồ Google */}
      <div className="embed-responsive embed-responsive-21by9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26432.42324808999!2d-118.34398767954286!3d34.09378509738966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1576846473265!5m2!1sen!2sbd"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          className="embed-responsive-item"
          title="Bản đồ Google"
        ></iframe>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
