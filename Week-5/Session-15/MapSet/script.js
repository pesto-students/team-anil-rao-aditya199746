let productViews = new WeakMap();

let cartItems = new WeakSet();

function incrementProductViews(productId) {
    const key = { id: productId };
    if (productViews.has(key)) {
        const viewCount = productViews.get(key);
        productViews.set(key, viewCount + 1);
        return `Product ID ${productId} is viewed for the first time`
      } else {
        productViews.set(key, 1);
        return `Product ID ${productId} is viewed for the second time`
      }
}

function addToCart(productId) {
    const product = { id: productId };
  
    if (cartItems.has(product)) {
      return "Product already in cart";
    } else {
      cartItems.add(product);
      return "Product added to cart";
    }
  }

  incrementProductViews(123)
incrementProductViews(123)