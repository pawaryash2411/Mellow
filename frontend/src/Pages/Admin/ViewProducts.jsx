import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  deleteProduct,
  getAdminProducts,
} from "../../Redux/Actions/productActions";
import Sidebar from "./Sidebar";
import "../../Styling/AdminDashboard.css";
import EditIcon from "../../assets/edit.png";
import DeleteIcon from "../../assets/delete.png";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { ADMIN_DELETE_PRODUCTS_RESET } from "../../Redux/Constants/productConstants";

const ViewProducts = () => {
  const { products, loading } = useSelector((state) => state.products);
  const { error, isDeleted } = useSelector((state) => state.updateProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };
  const columns = [
    {
      field: "id",
      headerName: "Product ID",
      minWidth: 200,
      flex: 1,
      cellClassName: "order-column",
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 300,
      flex: 1,
      cellClassName: "order-column",
    },
    {
      field: "stock",
      headerName: "Stock",
      minWidth: 100,
      flex: 0.5,
      cellClassName: "order-column",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 100,
      flex: 0.3,
      cellClassName: "order-column",
    },
    {
      field: "created_at",
      headerName: "Created At",
      minWidth: 150,
      flex: 0.5,
      cellClassName: "order-column",
    },

    {
      field: "actions",
      flex: 0.5,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      cellClassName: "order-column",
      renderCell: (params) => {
        return (
          <>
            <Button>
              <Link to={`/admin/all-products/product/${params.row.id}`}>
                <img src={EditIcon} className="products-func-img" alt="" />
              </Link>
            </Button>

            <Button onClick={() => deleteProductHandler(params.row.id, "id")}>
              <img src={DeleteIcon} className="products-func-img" alt="" />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        stock: item.Stock,
        price: item.price,
        created_at: String(item?.createdAt).substring(0, 10),
      });
    });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Product Deleted Successfully!!");
      navigate("/admin/dashboard");
      dispatch({ type: ADMIN_DELETE_PRODUCTS_RESET });
    }

    dispatch(getAdminProducts());
  }, [dispatch, error, isDeleted, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Sidebar />
          <div className="container admin-main-container">
            <h2>All Products</h2>
          </div>
          <div className="view-product-container">
            <div className="row d-flex justify-content-center ">
              <div className="col-xl-10 col-md-12">
                <div className="order-data-card user-card-full ">
                  <div className="row">
                    {products.length > 0 ? (
                      <div
                        style={{
                          height: "%100",
                          width: "100%",
                        }}
                      >
                        <DataGrid
                          rows={rows}
                          columns={columns}
                          disableRowSelectionOnClick
                          autoHeight
                          pageSizeOptions={10}
                          cellClassName="grid-column"
                        />
                      </div>
                    ) : (
                      <div className="empty-cart">
                        <strong>No Orders Placed Yet 🤷‍♂️</strong>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ViewProducts;
