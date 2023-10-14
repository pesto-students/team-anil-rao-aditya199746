import React from "react";
import { useEffect, useState } from "react";
import directApi from "../../services/directAPI";
import "./style.scss";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "react-router-dom";
import DetailsModal from "./DetailsModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [searchParams] = useSearchParams();
  let seatchText = searchParams.get("search");
  let allProducts = (text = "") => {
    let url = "";
    if (text) {
      url = `https://dummyjson.com/products/search?q=${text}`;
    } else {
      url = "https://dummyjson.com/products";
    }
    directApi
      .fetchProducts(url)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (seatchText) {
      console.log("call");
      allProducts(seatchText);
    } else {
      allProducts();
    }
  }, [seatchText]);

  const handleOpenPopUp = (product) => {
    setCurrentProduct(product);
    setOpen(true);
  };

  return (
    <section className="products-conainer">
      <h1>All Products</h1>
      <div className="products-wrapper">
        {products?.map((obj, idx) => {
          return (
            <Card
              sx={{ maxWidth: 345 }}
              onClick={() => handleOpenPopUp(obj)}
              key={obj.id}
              className="card-container"
              data-testid="card-container"
            >
              <CardMedia
                component="img"
                height="194"
                image={obj.thumbnail}
                alt={obj.brand}
              />
              <CardHeader title={obj.title} subheader={`$ ${obj.price}`} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {obj.description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {open && (
        <DetailsModal
          open={open}
          onClose={() => setOpen(false)}
          product={currentProduct}
        />
      )}
    </section>
  );
};

export default React.memo(Products);
