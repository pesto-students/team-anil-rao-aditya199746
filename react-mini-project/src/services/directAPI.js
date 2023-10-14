import axios from "axios";
export default class apis {
  static fetchProducts(url) {
    return axios.get(url);
  }
}
