import React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const HorizontalCardLayout = (props) => {
  return (
    <div className="content-container">
      <div className="left-section">
        {/* <Slider {...settings}>
            {props.product.images.map((data, idx) => {
              return ( */}
        <CardMedia
          component="img"
          height="194"
          image={props.product.thumbnail}
          alt={props.product.brand}
          className="modal-card-img"
        />
        {/* );
             })}
           </Slider> */}
      </div>
      <div className="right-section">
        <CardHeader
          title={props.product.title}
          subheader={`$ ${props.product.price}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.product.description}
          </Typography>
        </CardContent>
        <button onClick={() => addCart(props.product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default React.memo(HorizontalCardLayout);
