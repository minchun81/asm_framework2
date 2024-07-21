import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
const ListCategory = () => {
    
    return (
<div class="container-fluid">
{/* <!-- Start Page Content --> */}
<Header />

<div class="row">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">List Categories</h4>
                <div class="table-responsive ">
                    <table class="table user-table ">
                        <thead>
                            <tr>
                                <th class="border-top-0">ID</th>
                                <th class="border-top-0">Name</th>
                                <th class="border-top-0">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>minhtrung</td>

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

export default ListCategory;