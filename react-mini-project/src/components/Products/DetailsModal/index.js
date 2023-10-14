import { useDispatch, useSelector } from "react-redux";
import {
  setCartDetails,
  setCartProductsIds
} from "../../../redux/cart/actionCreator";
import "./styles.scss";
import GenericModal from "../../../commonComponents/DetailsModal";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DetailsModal = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "button__bar"
  };
  const cartListIds = useSelector((state) => state.cartReducer.cartListIds);
  const dispatch = useDispatch();
  const addCart = (item) => {
    item.count = 1;
    dispatch(setCartDetails(item));
    dispatch(setCartProductsIds(item.id));
  };
  return (
    <GenericModal
      open={props.open}
      onCloseModal={props.onClose}
      modalWidth={"75%"}
      modalHeight={"75%"}
      modalOverflow={"hidden"}
      heading={
        <>
          <div className="header">Product Details</div>
        </>
      }
    >
      <div className="content-container">
        <div className="left-section">
          <Slider {...settings}>
            {props.product.images.map((data, idx) => {
              return (
                <div key={idx} className="slider-card">
                  {/* <img src={data} alt={idx} /> */}
                  <CardMedia
                    component="img"
                    height="194"
                    image={data}
                    alt={props.product.brand}
                    className="modal-card-img"
                  />
                </div>
              );
            })}
          </Slider>
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
    </GenericModal>
  );
};

export default DetailsModal;
