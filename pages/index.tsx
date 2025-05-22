import { HomePage } from "components/home-page";
import { ProductsTop } from "components/products";
// import { useRouter } from "next/router";

export default function Home() {
  return (
    <div>
      <HomePage />
      <ProductsTop />
    </div>
  );
}
