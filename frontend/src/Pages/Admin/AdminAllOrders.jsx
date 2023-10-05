import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import "../../Styling/AdminDashboard.css";
import EditIcon from "../../assets/edit.png";
import DeleteIcon from "../../assets/delete.png";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrder,
  getAllAdminOrders,
} from "../../Redux/Actions/orderActions";
import { toast } from "react-toastify";
import { clearErrors } from "../../Redux/Actions/productActions";
import { ADMIN_DELETE_ORDER_RESET } from "../../Redux/Constants/orderConstants";

const AdminAllOrders = () => {
  const { orders, loading } = useSelector((state) => state.allOrders);
  const { error, isDeleted } = useSelector((state) => state.updateOrder);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };
  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      minWidth: 250,
      flex: 1,
      cellClassName: "order-column",
    },
    {
      field: "status",
      headerName: "Order Status",
      minWidth: 100,
      flex: 0.5,
      cellClassName: "order-column",
    },
    {
      field: "itemQty",
      headerName: "Items Quantity",
      minWidth: 100,
      type: "number",
      flex: 0.5,
      cellClassName: "order-column",
    },
    {
      field: "amount",
      headerName: "Total Amount",
      minWidth: 100,
      type: "number",
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
              <Link to={`/admin/all-orders/order/${params.row.id}`}>
                <img src={EditIcon} className="products-func-img" alt="" />
              </Link>
            </Button>

            <Button onClick={() => deleteOrderHandler(params.row.id, "id")}>
              <img src={DeleteIcon} className="products-func-img" alt="" />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((order) => {
      rows.push({
        id: order._id,
        itemQty: order.orderItems.length,
        status: order.paymentInfo.orderStatus,
        amount: order.paymentInfo.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Order Removed Successfully!!");
      navigate("/admin/dashboard");
      dispatch({ type: ADMIN_DELETE_ORDER_RESET });
    }

    dispatch(getAllAdminOrders());
  }, [dispatch, error, isDeleted, navigate]);

  return (
    <>
      <Sidebar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Sidebar />
          <div className="container  admin-main-container">
            <h2>All Reviews</h2>
          </div>
          <div className="view-product-container">
            <div className="row d-flex justify-content-center ">
              <div className="col-xl-10 col-md-12">
                <div className="order-data-card user-card-full ">
                  <div className="row">
                    {orders.length > 0 ? (
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
                        <strong>No Orders Data Found 🤷‍♂️</strong>
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

export default AdminAllOrders;
