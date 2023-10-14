import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCount, removeFromCart } from "../../redux/cart/actionCreator";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./styles.scss";
const Cart = () => {
  let totalMoney = 0;
  const [totalPrice, setTotalPrice] = useState(0);
  const cartList = useSelector((state) => state.cartReducer.cartList);

  const dispatch = useDispatch();
  const incrementCount = (item) => {
    let count = item.count + 1;
    dispatch(updateCount(item.id, count));
  };

  const decrementCount = (item) => {
    let count = item.count - 1;
    if (count < 1) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(updateCount(item.id, count));
    }
  };

  return (
    <section className="cart-container">
      {cartList?.length ? (
        cartList.map((obj) => {
          totalMoney = obj.count * obj.price + totalMoney;
          // setTotalPrice(totalMoney);
          return (
            <div className="cart-content-container">
              <div className="cart-left-section">
                <CardMedia
                  component="img"
                  height="194"
                  image={obj.thumbnail}
                  alt={obj.brand}
                  className="cart-modal-card-img"
                />
              </div>
              <div className="cart-right-section">
                <CardHeader title={obj.title} subheader={`$ ${obj.price}`} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {obj.description}
                  </Typography>
                </CardContent>
                <div className="couter">
                  <button
                    onClick={() => incrementCount(obj)}
                    className="cart-btn"
                  >
                    +
                  </button>
                  <div className="cart-count">{obj.count}</div>
                  <button
                    onClick={() => decrementCount(obj)}
                    className="cart-btn"
                  >
                    -
                  </button>
                </div>
                <div className="total-container">
                  Product Total= $
                  <div className="count">{obj.count * obj.price}</div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>No Products In cart</div>
      )}
      <div className="footer">
        Total Cart price
        <div className="total-price">{totalMoney}</div>
      </div>
    </section>
  );
};

export default React.memo(Cart);
