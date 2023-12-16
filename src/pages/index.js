import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const products = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return {
      props: {
        products: [],
      },
    };
  }
}
