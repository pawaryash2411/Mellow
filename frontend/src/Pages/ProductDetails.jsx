import React, { useEffect, useState } from "react";
import "../Styling/Productdetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../UrlHelper/baseUrl";
import { Rating } from "@mui/material";
import CartIcon from "../assets/cart.png";
import Carousel from "react-material-ui-carousel";
import ProfileIcon from "../assets/profile.png";
import { useDispatch } from "react-redux";
import { AddToCart } from "../Redux/Actions/cartActions";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Starred from "../assets/starred.png";
import { createNewReview } from "../Redux/Actions/productActions";
import Typography from "@mui/material/Typography";
import Loader from "../components/Loader";

const ProductDetails = () => {
  const [itemDetails, setItemDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [reviewRates, setReviewRates] = useState(0);
  const [reviewDesc, setReviewDesc] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/product/${id}`);
        const data = response.data;
        if (data.success) {
          setItemDetails(data.getProduct);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const options = {
    size: "small",
    value: itemDetails.productRatings,
    readOnly: true,
    precision: 0.5,
  };

  const optionsTwo = {
    size: "medium",
    value: itemDetails.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const increaseQuantity = () => {
    if (itemDetails.Stock <= quantity) {
      toast.warning("Product Reaches its Maximum Limit!! 🫡");
      return;
    }
    const increment = quantity + 1;
    setQuantity(increment);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const decrement = quantity - 1;
    setQuantity(decrement);
  };

  const AddToCartHandler = () => {
    dispatch(AddToCart(id, quantity));
    toast.success(`${itemDetails.name} Added to Cart Successfully 🥳`);
  };

  const reviewSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("Ratings", reviewRates);
    myForm.set("Description", reviewDesc);
    myForm.set("ProductID", id);
    dispatch(createNewReview(myForm));
    setOpen(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="card-container">
            <div className="left">
              <Carousel className="product-carousel-container">
                {itemDetails?.images?.map((data, i) => (
                  <div key={i}>
                    <img
                      src={data.url}
                      alt="imageData"
                      className="product-image"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="right">
              <div className="product-info">
                <div className="details">
                  <div className="product-name">
                    <h1>{itemDetails.category}</h1>
                    <div className="ratings-Box">
                      <Rating {...options} />
                      <label className="ratings-text">
                        <small>({itemDetails?.reviews?.length || 0})</small>
                      </label>
                    </div>
                  </div>
                  <h2>{itemDetails.name}</h2>
                  <h3 className="product-description">
                    {itemDetails.description}
                  </h3>
                </div>
                <div className="product-details-box">
                  <ul>
                    <li className="stock">Price</li>
                    <li className="price-count">Rs. {itemDetails.price} /-</li>
                  </ul>
                  <ul>
                    <li className="stock">Stock</li>

                    <li
                      className={
                        itemDetails.Stock < 1 ? "stock-out" : "stock-count"
                      }
                    >
                      {itemDetails.Stock < 1
                        ? "Out of Stock"
                        : itemDetails.Stock}
                    </li>
                  </ul>

                  <ul>
                    <li className="product_size_text">Size</li>
                    <li className="product_size">SM</li>
                    <li className="product_size">M</li>
                    <li className="product_size">L</li>
                    <li className="product_size">XL</li>
                  </ul>
                  <ul>
                    <li className="stock">Quantity</li>
                    <li>
                      <div className="cart-quantity">
                        <button
                          className="quantity-btn decrease"
                          onClick={decreaseQuantity}
                        >
                          -
                        </button>
                        <input
                          className="quantity-input"
                          type="number"
                          value={quantity}
                          readOnly
                        />
                        <button
                          className="quantity-btn increase"
                          onClick={increaseQuantity}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="cart-container">
                  <button
                    className="foot login-button"
                    onClick={AddToCartHandler}
                  >
                    <img src={CartIcon} alt="cart" className="foot-img" />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <h2 className="product-reviews">
              User Reviews
              <Button
                variant="text"
                style={{ color: "aqua" }}
                size="small"
                onClick={handleClickOpen}
              >
                <img src={Starred} alt="icon" className="drawer-icon" /> Rate &
                Review Product
              </Button>
            </h2>
          </div>
        </>
      )}

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        color="dark"
        fullWidth="true"
      >
        <DialogTitle style={{ color: "black" }} id="responsive-dialog-title">
          <Typography>Rate The Product</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="d-flex flex-column pb-3 w-108">
              <label className="login-text" style={{ color: "black" }}>
                Product Ratings
              </label>
              <Rating
                value={reviewRates}
                onChange={(e) => setReviewRates(e.target.value)}
                size="large"
              />
            </div>
          </DialogContentText>
          <DialogContentText>
            <div className="d-flex flex-column pb-3 w-108">
              <label className="login-text" style={{ color: "black" }}>
                Product Description
              </label>
              <textarea
                required
                rows={5}
                value={reviewDesc}
                onChange={(e) => setReviewDesc(e.target.value)}
                placeholder="Describe Your Product Experience"
                className="login-input"
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          <Button onClick={reviewSubmitHandler} autoFocus>
            Submit Review
          </Button>
        </DialogActions>
      </Dialog>

      <div className="review-container">
        {itemDetails?.reviews?.map((review, i) => (
          <div className="review-box" key={i}>
            <img
              src={ProfileIcon}
              className="reviewer-icon"
              alt="reviewer-profile"
            />
            <h6 className="reviewer-name">{review.name}</h6>
            <div className="ratings-Box">
              <Rating {...optionsTwo} />
            </div>
            <small className="reviewer-comment">{review.comment}</small>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
