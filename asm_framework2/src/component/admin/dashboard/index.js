import React from "react";

const Dashboard = () => {
    return (
        <div className="container">
            
        <div className="container-fluid">
            <div className="page-wrapper">
          <div className="page-breadcrumb">
            <div className="row align-items-center">
              <div className="col-md-6 col-8 align-self-center">
                <h3 className="page-title mb-0 p-0">Dashboard</h3>
                <div className="d-flex align-items-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Dashboard
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          
        </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex flex-wrap align-items-center">
                                            <div>
                                                <h3 className="card-title">Sales Overview</h3>
                                                <h6 className="card-subtitle">Ample Admin Vs Pixel Admin</h6>
                                            </div>
                                            <div className="ms-lg-auto mx-sm-auto mx-lg-0">
                                                <ul className="list-inline d-flex">
                                                    <li className="me-4">
                                                        <h6 className="text-success"><i
                                                                className="fa fa-circle font-10 me-2 "></i>Ample</h6>
                                                    </li>
                                                    <li>
                                                        <h6 className="text-info"><i
                                                                className="fa fa-circle font-10 me-2"></i>Pixel</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="amp-pxl" style={{height: 360}}>
                                            <div className="chartist-tooltip"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">Our Visitors </h3>
                                <h6 class="card-subtitle">Different Devices Used to Visit</h6>
                                <div id="visitor"
                                    style={{ height: '290px', width: '100%', maxHeight: '290px', position: 'relative' }}
                                    class="c3">
                                    <div class="c3-tooltip-container"
                                        style={{ position: 'absolute', pointerEvents: 'none', display: 'none' }}>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <hr class="mt-0 mb-0"/>
                            </div>
                            <div class="card-body text-center ">
                                <ul class="list-inline d-flex justify-content-center align-items-center mb-0">
                                    <li class="me-4">
                                        <h6 class="text-info"><i class="fa fa-circle font-10 me-2 "></i>Mobile</h6>
                                    </li>
                                    <li class="me-4">
                                        <h6 class=" text-primary"><i class="fa fa-circle font-10 me-2"></i>Desktop</h6>
                                    </li>
                                    <li class="me-4">
                                        <h6 class=" text-success"><i class="fa fa-circle font-10 me-2"></i>Tablet</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                </div>
            </div>
            </div>
    )
}
export default Dashboard;