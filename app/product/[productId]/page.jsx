import { Product } from "@/components/Product";
import { useSelector } from "react-redux";

export async function generateStaticParams() {
  const resp = await fetch("http://localhost:3000/api/products");
  const products = await resp.json();

  return products?.map((product) => ({
    productId: product.path.toString(),
  }));
}

export async function generateMetadata({ params: { productId } }) {
  try {
    const data = await fetch(`http://localhost:3000/api/products/${productId}`);
    const product = await data.json();
    // console.log({ product });

    if (!product.length) {
      return {
        title: "Not Found!",
        description: "The page you you looking for does not exist!",
      };
    }
    return {
      title: product[0]?.title,
      description: product[0]?.about,
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Not Found!",
      description: "The page you you looking for does not exist!",
    };
  }
}

const ProductPage = ({ params: { productId } }) => {
  return <Product productId={productId} />;
};

export default ProductPage;
