import React from 'react'
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import ProductController from './ProductController';
const Model = (props) => {
  const {isModalVisible,isAddNewProduct,setIsModalVisible,ProductData} = props
  return (
    <Modal
    title={`${isAddNewProduct? 'Add':'Edit'} Product`}
    open={isModalVisible}
    footer={null}
    closable={true}
    width={1000}
    onCancel={() => setIsModalVisible(false)}>
    <ProductController  ProductData={ProductData} setIsModalVisible={setIsModalVisible} isAddNewProduct={isAddNewProduct}/>
  </Modal>
  )
}

export default Model