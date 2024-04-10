import Breadcrumb from "../__components/Breadcrumb/Breadcrumb";
import Banner from "../__components/Products/Banner";
import ProductContainer from "../__components/Products/ProductContainer";

export const metadata = {
  title: "Product",
  description: "Welcome in Product Section",
};
export default function product() {
  return (
    <div className="product w-[100%]">
      <Banner />
      <ProductContainer />
    </div>
  );
}
