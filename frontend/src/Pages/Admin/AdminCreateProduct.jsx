import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { createNewProduct } from "../../Redux/Actions/productActions";
import { ADMIN_CREATE_PRODUCTS_RESET } from "../../Redux/Constants/productConstants";
import { toast } from "react-toastify";

const productCategories = [
  "Fashion",
  "SmartPhone",
  "Laptops",
  "Electronics",
  "Books",
  "Furniture",
  "Healthcare",
  "Beauty",
];
const AdminCreateProduct = () => {
  const { loading, success } = useSelector((state) => state.createNewProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [productImage, setProductImage] = useState([]);
  const [productImagePreview, setProductImagePreview] = useState([]);
  const [productCategory, setProductCategory] = useState("");

  const createProductHandler = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", productName);
    form.append("description", productDesc);
    form.append("price", productPrice);
    form.append("Stock", productQuantity);
    form.append("category", productCategory);
    productImage.forEach((img) => {
      form.append("images", img);
    });

    dispatch(createNewProduct(form));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setProductImage([]);
    setProductImagePreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setProductImagePreview((oldPreviews) => [
            ...oldPreviews,
            reader.result,
          ]);
          setProductImage((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    if (success) {
      toast.success("Product Created Successfully");
      navigate("/admin/all-products");
      dispatch({ type: ADMIN_CREATE_PRODUCTS_RESET });
    }
  }, [dispatch, navigate, success]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Sidebar />
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center login-container">
              <div className="col-lg-4 offset-lg-2 col-md-6 offset-md-3">
                <div className=" mt-md-5">
                  <h1 className="login-system-register">Create Product</h1>
                  <form className="pt-2" onSubmit={createProductHandler}>
                    <div className="d-flex flex-column pb-3">
                      <label for="email" className="login-text">
                        Product Name
                      </label>
                      <input
                        type="text"
                        required
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="Enter Product Name"
                        className="login-input"
                      />
                    </div>

                    <div className="d-flex flex-column pb-3">
                      <label for="email" className="login-text">
                        Description
                      </label>
                      <textarea
                        type="text"
                        required
                        rows={5}
                        value={productDesc}
                        onChange={(e) => setProductDesc(e.target.value)}
                        placeholder="Add Product Description"
                        className="login-input"
                      />
                    </div>

                    <div className="d-flex flex-column pb-3">
                      <label for="email" className="login-text">
                        Enter Price
                      </label>
                      <input
                        type="number"
                        required
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        placeholder="Enter Price"
                        className="login-input"
                      />
                    </div>

                    <div className="d-flex flex-column pb-3">
                      <label for="email" className="login-text">
                        Enter Quantity
                      </label>
                      <input
                        type="number"
                        value={productQuantity}
                        required
                        onChange={(e) => setProductQuantity(e.target.value)}
                        placeholder="Enter Product Quantity"
                        className="login-input"
                      />
                    </div>

                    <div className="d-flex flex-column pb-3">
                      <label for="email" className="login-text">
                        Select Category
                      </label>
                      <select
                        placeholder="Select Category"
                        className="login-input"
                        style={{ color: "black" }}
                        onClick={(e) => setProductCategory(e.target.value)}
                      >
                        {productCategories.map((data) => (
                          <option key={data} value={data}>
                            {data}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="d-flex flex-column pb-3">
                      <label for="avatar" className="login-text">
                        Upload Images
                      </label>
                      <div className="avatar-preview-container">
                        <input
                          type="file"
                          name="avatar"
                          id="avatar"
                          className="avatar-input"
                          required
                          onChange={createProductImagesChange}
                          accept="image/*"
                          multiple
                        />
                      </div>
                      <div>
                        {productImagePreview.map((image, i) => (
                          <img
                            src={image}
                            alt={i}
                            key={i}
                            className="avatar-preview mt-3"
                            data-tooltip="Default Image"
                          />
                        ))}
                      </div>
                    </div>

                    <button className="login-button mt-4">
                      <span>Create Product</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdminCreateProduct;
