import React from "react";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import book from "../../assets/icons/Group 5.svg";
import Card from "@mui/material/Card";
import CartService from "../../services/CartService";
import { useState, useEffect } from "react";
import "./Cart.css";

function Cart(props) {
  const [cartDetails, setCartDetails] = useState([]);

  useEffect(() => {
    fetchCartDetails();
  });

  const fetchCartDetails = () => {
    CartService.getCartDetails()
      .then((response) => {
        setCartDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openHome = () => {
    props.history.push({
      pathname: "/Libarary",
    });
  };

  const orderFromCart = () => {
    alert("Order Successed");
    props.history.push({
      pathname: "/order",
    });
  };

  const removeItemFromCart = (cartId) => {
    CartService.deleteCartItem(cartId).then((response) => {
      alert("deleted successfully");
    });
  };

  return (
    <div>
      <header className="header-content header">
        <div className="logo-content">
          <img
            src={book}
            alt="logo-content"
            className="logo-content-img"
            width=""
          />
        </div>
        <div className="logo-content-Liba-buttons">
          <Button
            sx={{ mr: "30px", ml: "30px" }}
            variant="contained"
            onClick={openHome}
          >
            
            Back to Libarary
          </Button>
        </div>
      </header>
      <div>
        <h1>Summary Details</h1>
        <Typography>Cart Count:{cartDetails.length}</Typography>
      </div>

      <div className="cartcardss">
        {cartDetails.map((cartItem, i) => {
          return (
            <div key={i}>
              <div className="">
                <Card
                  sx={{
                    maxWidth: 200,
                    marginBottom: "20px",
                    marginRight: "20px",
                  }}
                >
                  <div style={{ width: "8rem", margin: "0 auto" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      width="1"
                      image={cartItem.bookDetailsModel.imageURL}
                      alt="green iguana"
                    />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {cartItem.bookDetailsModel.bookName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cartItem.bookDetailsModel.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => removeItemFromCart(cartItem.cartId)}
                      variant="contained"
                      size="small"
                    >
                      Remove
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => orderFromCart()}
                    >
                      Checkout
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
      <div className="place__order">
        {cartDetails.length != 0 && (
          <Button variant="contained" onClick={() => orderFromCart()}>
            PLACE ORDER
          </Button>
        )}
      </div>
    </div>
  );
}

export default Cart;
