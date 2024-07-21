import React from 'react';

const listProduct = () => {
    
    return (
<div className="container-fluid">
{/* <!-- Start Page Content --> */}
<div className="row ">
    <div className="col-sm-12 ">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">List Product</h4>
                <div className="table-responsive">
                    <table className="table user-table text-center">
                        <thead>
                            <tr className='table-light'>
                                <th className="border-top-0">ID</th>
                                <th className="border-top-0">Name</th>
                                <th className="border-top-0">Image</th>
                                <th className="border-top-0">Price</th>
                                <th className="border-top-0">ID category</th>
                                <th className="border-top-0">Description</th>
                                <th className="border-top-0">Action</th>
                            </tr>
                        </thead>
                        <tbody className='align-middle'>
                            <tr>
                                <td >1</td>
                                <td>táo xanh</td>
                                <td>trung123</td>
                                <td><img width={"150px"} src={"https://bizweb.dktcdn.net/thumb/large/100/390/808/products/uzs0n9j-400x400.png?v=1632211622160"} alt="Example" /></td>
                                <td className='align-middle'>Huynh Minh Trung</td>
                                <td>01665202865</td>
                                <td> 
                                    <div className="d-flex gap-2 justify-content-center">
                                    <span><button className="btn btn-primary">Edit</button></span>
                                    <span><button href className="btn btn-danger">Delete</button></span>
                                     </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>minhtrung</td>
                                <td>trung123</td>
                                <td><img width={"150px"} src={"https://themewagon.github.io/fruitkha/assets/img/products/product-img-5.jpg"} alt="Example" /></td>
                                <td>Huynh Minh Trung</td>
                                <td>01665202865</td>
                                <td> 
                                    <div className="d-flex gap-2 justify-content-center">
                                    <span><button className="btn btn-primary">Edit</button></span>
                                    <span><button href className="btn btn-danger">Delete</button></span>
                                     </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>minhtrung</td>
                                <td>trung123</td>
                                <td><img width={"150px"} src={"https://themewagon.github.io/fruitkha/assets/img/products/product-img-5.jpg"} alt="Example" /></td>
                                <td>Huynh Minh Trung</td>
                                <td>01665202865</td>
                                <td> 
                                    <div className="d-flex gap-2 justify-content-center">
                                    <span><button className="btn btn-primary">Edit</button></span>
                                    <span><button href className="btn btn-danger">Delete</button></span>
                                     </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>minhtrung</td>
                                <td>trung123</td>
                                <td><img width={"150px"} src={"https://themewagon.github.io/fruitkha/assets/img/products/product-img-5.jpg"} alt="Example" /></td>
                                <td>Huynh Minh Trung</td>
                                <td>01665202865</td>
                                <td> 
                                    <div className="d-flex gap-2 justify-content-center">
                                    <span><button className="btn btn-primary">Edit</button></span>
                                    <span><button href className="btn btn-danger">Delete</button></span>
                                     </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>minhtrung</td>
                                <td>trung123</td>
                                <td><img width={"150px"} src={"https://themewagon.github.io/fruitkha/assets/img/products/product-img-5.jpg"} alt="Example" /></td>
                                <td>Huynh Minh Trung</td>
                                <td>01665202865</td>
                                <td> 
                                    <div className="d-flex gap-2 justify-content-center">
                                    <span><button className="btn btn-primary">Edit</button></span>
                                    <span><button href className="btn btn-danger">Delete</button></span>
                                     </div>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>minhtrung</td>
                                <td>trung123</td>
                                <td><img width={"150px"} src={"https://themewagon.github.io/fruitkha/assets/img/products/product-img-5.jpg"} alt="Example" /></td>
                                <td>Huynh Minh Trung</td>
                                <td>01665202865</td>
                                <td> 
                                    <div className="d-flex gap-2 justify-content-center">
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

export default listProduct;