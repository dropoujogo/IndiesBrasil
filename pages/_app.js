import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css"; // opcional, se você tiver estilos próprios
import Layout from "../components/Layout";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
