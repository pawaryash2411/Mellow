import * as React from "react";
import "../../Styling/AdminDashboard.css";
import Money from "../../assets/payment.png";
import User from "../../assets/user.png";
import PriceRange from "../../assets/priceRange.png";
import Cart from "../../assets/cart.png";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  const { products } = useSelector((state) => state.products);
  const { orders, totalAmount } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);

  const dataPackets = [
    {
      id: 1,
      img: PriceRange,
      heading: products && products.length,
      about: "Total Products",
    },
    {
      id: 2,
      img: Cart,
      heading: orders && orders.length,
      about: "Total Orders",
    },
    {
      id: 3,
      img: User,
      heading: users && users.length,
      about: "Total Users",
    },
    {
      id: 4,
      img: Money,
      heading: totalAmount ? totalAmount : "0",
      about: "Total Amount",
    },
  ];
  return (
    <>
      <Sidebar />

      <div className="container admin-main-container">
        <h2>Admin Dashboard</h2>

        <div className="container text-center features mt-5">
          <div className="row">
            {dataPackets.map((data) => (
              <div className="mt-1 col-lg-3 col-md-2 col-sm-6" key={data.id}>
                <img src={data.img} alt={data.img} />
                <p className="mt-4">{data.heading}</p>
                <b>{data.about}</b>
              </div>
            ))}
          </div>
        </div>

        <div className="card doughnut-container">
          <div className="card-header py-3 cart-heading-container">
            <h5 className="mb-0 cart-heading">TOTAL AMOUNT CHART</h5>
          </div>
        </div>

        <div className="card doughnut-container">
          <div className="card-header py-3 cart-heading-container">
            <h5 className="mb-0 cart-heading">TOTAL AMOUNT CHART</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
