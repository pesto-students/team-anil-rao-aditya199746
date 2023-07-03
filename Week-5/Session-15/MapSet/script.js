let productViews = new WeakMap();

let cartItems = new WeakSet();

function incrementProductViews(productId) {
   
    if (productViews.has(productId)) {
        const viewCount = productViews.get(productId);
        productViews.set(productId, viewCount + 1);
        return `Product ID ${productId} is viewed for the first time`
      } else {
        productViews.set(productId, 1);
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

  incrementProductViews({id:123})
incrementProductViews({id:123})