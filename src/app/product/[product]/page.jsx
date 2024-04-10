import ProductDetails from "@/app/__components/Products/ProductDetails/ProductDetails";


export async function generateMetadata({ params }){
  const res = await fetch(`https://dummyjson.com/products/${params.product}`);
  const data = await res.json()
  return{
    title: data.title,
    description: data.description
  }
}
export default async function productDetails({ params }) {

  return (
    <div className="productDetails">
      <ProductDetails prams={params.product} />
    </div>
  );
}
