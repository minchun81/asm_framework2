import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
const ListUser = () => {
    
    return (
<div class="container-fluid">
<Header />

{/* <!-- Start Page Content --> */}
<div class="row">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Danh sách người dùng</h4>
                <div class="table-responsive">
                    <table class="table user-table">
                        <thead>
                            <tr>
                                <th class="border-top-0">ID</th>
                                <th class="border-top-0">Username</th>
                                <th class="border-top-0">Password</th>
                                <th class="border-top-0">Email</th>
                                <th class="border-top-0">Full name</th>
                                <th class="border-top-0">Phone number</th>
                                <th class="border-top-0">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>minhtrung</td>
                                <td>trung123</td>
                                <td>@Genelia</td>
                                <td>Huynh Minh Trung</td>
                                <td>01665202865</td>
                                <td> 
                                    <div className="d-flex gap-2 ">
                                    <span><button className="btn btn-primary">Edit</button></span>
                                    <span><button href className="btn btn-danger">Delete</button></span>
                                     </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>minhtrung</td>
                                <td>trung123</td>
                                <td>@Ritesh</td>
                                <td>Huynh Minh Trung</td>
                                <td>01665202865</td>
                                <td> 
                                    <div className="d-flex gap-2 ">
                                    <span><button className="btn btn-primary">Edit</button></span>
                                    <span><button href className="btn btn-danger">Delete</button></span>
                                     </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>minhtrung</td>
                                <td>trung123</td>
                                <td>@Govinda</td>
                                <td>Huynh Minh Trung</td>
                                <td>01665202865</td>
                                <td> 
                                    <div className="d-flex gap-2 ">
                                    <span><button className="btn btn-primary">Edit</button></span>
                                    <span><button href className="btn btn-danger">Delete</button></span>
                                     </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>minhtrung</td>
                                <td>trung123</td>
                                <td>@Hritik</td>
                                <td>Huynh Minh Trung</td>
                                <td>01665202865</td>
                                <td> 
                                    <div className="d-flex gap-2 ">
                                    <span><button className="btn btn-primary">Edit</button></span>
                                    <span><button href className="btn btn-danger">Delete</button></span>
                                     </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>minhtrung</td>
                                <td>trung123</td>
                                <td>@Maruti</td>
                                <td>Huynh Minh Trung</td>
                                <td>01665202865</td>
                                <td> 
                                    <div className="d-flex gap-2 ">
                                    <span><button className="btn btn-primary">Edit</button></span>
                                    <span><button href className="btn btn-danger">Delete</button></span>
                                     </div>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>minhtrung</td>
                                <td>trung123</td>
                                <td>@Sonu</td>
                                <td>Huynh Minh Trung</td>
                                <td>01665202865</td>
                                <td> 
                                    <div className="d-flex gap-2 ">
                                    <span><button className="btn btn-primary">Edit</button></span>
                                    <span><button href className="btn btn-danger">Delete</button></span>
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

{/* End PAge Content  */}

</div>
);
};

export default ListUser;