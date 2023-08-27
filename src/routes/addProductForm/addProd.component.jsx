import React from "react";
import AddProductForm from "../../components/add-product-form/add-product-form.component";
import "./addProd.styles.scss";
function AddProd() {
  return (
    <div className="formContainer"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/cool-background2.png)`, // Adjust the path based on your project structure
      // Other inline styles
    }}>
      <AddProductForm />
    </div>
  );
}

export default AddProd;
