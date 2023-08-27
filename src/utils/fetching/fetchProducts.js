import axios from "axios";

export const getProducts = async () => {
  try {
    const prods = await axios(
      "https://my-json-server.typicode.com/pk1114585/product/product"
    );

    return prods;
  } catch (err) {
    console.log("Error In fetching");
  }
};
