import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import NewsLetter from "../components/NewsLetter";
import TempShop from "../layouts/TempShop";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../Redux/Actions/productActions";
import Trending from "../components/Trending";
// import Timeline from "../components/Timeline";
import Loader from "../components/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  console.log("products", products);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Banner />
          <div className="container">
            <h2>Featured Products</h2>
            {loading ? (
              <Loader />
            ) : (
              <div id="productID">
                {products &&
                  products.map((product) => (
                    <TempShop key={product._id} products={product} />
                  ))}
              </div>
            )}
          </div>
          <div className="container">
            <h2>Trending For You</h2>
            <Trending />
          </div>
          {/* <Timeline /> */}
          <Features />
          <NewsLetter />
        </>
      )}
    </>
  );
};

export default Home;
