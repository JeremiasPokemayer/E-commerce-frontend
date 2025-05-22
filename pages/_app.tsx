import "lib/base.css";
import UserContext from "@/lib/user-context";
import { Layout } from "components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <UserContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext>
  );
}
