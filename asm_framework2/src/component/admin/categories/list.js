import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";

const ListCategory = () => {
    
    return (
<div className="">
{/* <!-- Bắt đầu nội dung trang --> */}
<Header />

<div className="row">
    <div className="col-sm-11" style={{position: "relative", left: "241px"}} >
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Danh Sách Danh Mục</h4>
                <span><a href='/admin/addCategory' className="btn btn-primary mb-3">Thêm Danh Mục</a></span>

                <div className="table-responsive">
                    <table className="table user-table">
                        <thead>
                            <tr>
                                <th className="border-top-0">ID</th>
                                <th className="border-top-0">Tên</th>
                                <th className="border-top-0">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>minhtrung</td>
                                <td> 
                                    <div className="d-flex gap-2">
                                        <span><a href='/admin/editCategory' className="btn btn-primary">Sửa</a></span>
                                        <span><button className="btn btn-danger">Xóa</button></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>minhtrung</td>
                                <td> 
                                    <div className="d-flex gap-2">
                                        <span><a href='/admin/editCategory' className="btn btn-primary">Sửa</a></span>
                                        <span><button className="btn btn-danger">Xóa</button></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>minhtrung</td>
                                <td> 
                                    <div className="d-flex gap-2">
                                        <span><a href='/admin/editCategory' className="btn btn-primary">Sửa</a></span>
                                        <span><button className="btn btn-danger">Xóa</button></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>minhtrung</td>
                                <td> 
                                    <div className="d-flex gap-2">
                                        <span><a href='/admin/editCategory' className="btn btn-primary">Sửa</a></span>
                                        <span><button className="btn btn-danger">Xóa</button></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>minhtrung</td>
                                <td> 
                                    <div className="d-flex gap-2">
                                        <span><a href='/admin/editCategory' className="btn btn-primary">Sửa</a></span>
                                        <span><button className="btn btn-danger">Xóa</button></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>minhtrung</td>
                                <td> 
                                    <div className="d-flex gap-2">
                                        <span><a href='/admin/editCategory' className="btn btn-primary">Sửa</a></span>
                                        <span><button className="btn btn-danger">Xóa</button></span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

{/* Kết thúc nội dung trang */}
</div>
);
};

export default ListCategory;
