import React from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Styling/Cart.css";

const ConfirmOrder = () => {
  const { cartItems, shippingInfo } = useSelector((state) => state.cartData);
  const { user } = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax;

  const ProceedPayHandler = (e) => {
    e.preventDefault();
    const data = { subtotal, tax, totalPrice };
    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    navigate("/cart/order-confirm/payment");
  };

  return (
    <>
      <section className="h-100 ">
        <div className="container py-5">
          <CheckoutSteps activeStep={1} />
          <div className="row d-flex justify-content-center my-5">
            <div className="col-md-8 ">
              <div className="card mb-4">
                <div className="card-header py-3 cart-heading-container">
                  <h5 className="mb-0 cart-heading">SHIPPING ADDRESS</h5>
                </div>
                <div className="card-body cart-details">
                  <div className="row">
                    <p className="cart-product-name">
                      <strong>Name: </strong>
                      <strong>{user?.name}</strong>
                    </p>
                    <p className="cart-product-name">
                      <small>Address: </small>
                      <small>{address}</small>
                    </p>
                    <p className="cart-product-name">
                      <small>Phone Number: </small>
                      <small>{shippingInfo.phoneNo}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3 cart-heading-container">
                  <h5 className="mb-0 cart-heading">ALL ITEMS</h5>
                </div>

                {cartItems.length > 0 ? (
                  cartItems?.map((item) => (
                    <div className="card-body" key={item.productId}>
                      <div className="row">
                        <div className="col-lg-2 col-md-4">
                          <Link to={`/product/${item.productId}`}>
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={item.image}
                                className="w-100"
                                alt="cart-img"
                              />
                            </div>
                          </Link>
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0 cart-details">
                          <p className="cart-product-name">{item.name}</p>
                          <p className="cart-product-productId">
                            <small>#{item.productId}</small>
                          </p>
                        </div>

                        <div className="col-lg-4 col-md-6 cart-details">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <strong style={{ marginTop: ".5rem" }}>
                              {item.quantity} X {item.price} = ₹
                              {item.quantity * item.price}/-
                            </strong>
                          </div>
                        </div>
                      </div>

                      <hr className="my-4 mid-border" />
                    </div>
                  ))
                ) : (
                  <div className="empty-cart">
                    <strong>Your Cart is Empty 🤷‍♂️</strong>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3 cart-heading-container">
                  <h5 className="mb-0 summary-heading">ORDER SUMMARY</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group pricing-container">
                    <li className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      <strong>Sub Total</strong>
                      <strong>
                        ₹{subtotal}
                        /-
                      </strong>
                    </li>
                    <li className=" d-flex justify-content-between align-items-center px-0">
                      <strong>Shipping Charges</strong>
                      <strong style={{ color: "green" }}>Free</strong>
                    </li>
                    <hr className="my-2 mid-border" />
                    <li className="total-amount-container d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total Amount</strong>
                      </div>
                      <span>
                        <strong>₹{totalPrice}*/-</strong>
                      </span>
                    </li>
                    <small
                      style={{
                        fontSize: ".6rem",
                        textAlign: "right",
                        color: "#fff",
                      }}
                    >
                      18% GST
                    </small>
                  </ul>

                  {/* <Link to={isAuthenticated ? "/cart/shipping" : "/login"}> */}
                  <button
                    type="button"
                    className="login-button mt-4"
                    onClick={ProceedPayHandler}
                  >
                    Proceed to Payment
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmOrder;
