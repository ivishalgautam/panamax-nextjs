import { Product } from "@/components/Product";
import productsData from "@/store/productsData";
import Image from "next/image";

export async function generateStaticParams() {
  const resp = await JSON.stringify(productsData);
  const products = await JSON.parse(resp);

  return products?.map((product) => ({
    productId: product.path.toString(),
  }));
}

export async function generateMetadata({ params: { productId } }) {
  try {
    const data = await JSON.stringify(
      productsData.filter((product) => product.path === productId)
    );
    const product = await JSON.parse(data);

    if (!product.length) {
      return {
        title: "Not Found!",
        description: "The page you you looking for does not exist!",
      };
    }
    return {
      title: product?.[0]?.metaTitle,
      description: product?.[0]?.metaDescription,
      keywords: product?.[0]?.metaKeywords,
      alternates: {
        canonical: `https://panamax.co.in/product/${productId}`,
      },
      openGraph: {
        title: product?.[0]?.metaTitle,
        description: product?.[0]?.metaDescription,
        image: {
          url: <Image src={product?.[0]?.productImg} />,
          width: 800,
          height: 600,
        },
      },
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
