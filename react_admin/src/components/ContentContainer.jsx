import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProoductList ,deleteProoduct  } from "../features/products/productSlice";
import Model from "./Model";

const ContentContainer = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isAddNewProduct, setisAddNewProduct] = useState(false)
  const [ProductData, setProductData] = useState({})
  const { loading, productList, error } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProoductList());
  }, []);

  const handleAddProduct = (data) =>{
    setisAddNewProduct(true)
    setIsModalVisible(true)
  }
  const handleDeleteProduct= async (id) =>{
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
  };
    const response = await fetch(`http://localhost:3050/products/${id}`,requestOptions);
    dispatch(getProoductList())
   
  }

  const handleEditProduct = (data) =>{
    setProductData(data)
    setisAddNewProduct(false)
    setIsModalVisible(true)
  }
  return (
    <div className="user_container">
      <div className="row px-3 px-md-0">
        <div className="col-md-12">
          <button type="button" className="btn btn-inline" onClick={handleAddProduct}>Add Product</button>
          <div className="relative">
            <div className="table-re-wrap">
              <div className="row table-head-row table-cell">
                <div className="col-md-3">
                  <h4 className="cell-heading">Product Image</h4>
                </div>
                <div className="col-md-3">
                  <h4 className="cell-heading">Title</h4>
                </div>
                <div className="col-md-4">
                  <h4 className="cell-heading">Discription</h4>
                </div>
                <div className="col-md-2">
                  <h4 className="cell-heading">Action</h4>
                </div>
              </div>
              <section>
                {loading
                  ? "loading..."
                  : productList.map((product) => {
                      return (
                        <div
                          className="row table-cell align-items-center relative"
                          key={product.id}
                        >
                          <div className="col-md-3 image-cell">
                            <div className="item-image-wrap">
                              <span>
                                <img
                                  src={product.productImageUrl}
                                  width={70}
                                  height={70}
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <span>{product.productTitle}</span>
                          </div>
                          <div className="col-md-4  text_overflow">
                            <span className="text_overflow">
                              {product.productDescription}
                            </span>
                          </div>
                          <div className="col-md-2 actions_container">
                            <span onClick={handleEditProduct.bind(null,product)}>
                              <svg
                                className="icons"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                              >
                                <title>edit</title>
                                <path d="M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227l-12.826 12.825-1.010 4.762 4.763-1.010 12.826-12.823c-0.001 0 0.216-1.083-1.228-2.527zM5.68 17.217l-1.624 0.35c-0.156-0.293-0.345-0.586-0.69-0.932s-0.639-0.533-0.932-0.691l0.35-1.623 0.47-0.469c0 0 0.883 0.018 1.881 1.016 0.997 0.996 1.016 1.881 1.016 1.881l-0.471 0.468z"></path>
                              </svg>
                            </span>
                            <span onClick={handleDeleteProduct.bind(null,product.id)}>
                              <svg
                              className="icons"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                              >
                                <title>squared-cross</title>
                                <path d="M16 2h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM13.061 14.789l-3.061-3.060-3.061 3.060-1.729-1.728 3.061-3.061-3.060-3.061 1.729-1.729 3.060 3.061 3.059-3.061 1.729 1.729-3.059 3.061 3.060 3.061-1.728 1.728z"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      );
                    })}
              </section>
            </div>
          </div>
        </div>
      </div>
      <Model isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}  isAddNewProduct={isAddNewProduct} ProductData={ProductData}/>
    </div>
  );
};

export default ContentContainer;
