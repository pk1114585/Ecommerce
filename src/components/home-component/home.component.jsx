import Products from "../products/products.component";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../store/products/product.selector";
import { ClipLoader } from "react-spinners";
import Sort from "../sort/sort.component";
import "./homeComp.styles.scss";

const override = {
  display: "block",
  margin: "20% auto",
};

function HomeComponent() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="home-container" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/cool-background1.png)`, // Adjust the path based on your project structure
      // Other inline styles
    }}>
      <Sort />
      {isLoading ? <ClipLoader cssOverride={override} /> : <Products />}
    </div>
  );
}

export default HomeComponent;
