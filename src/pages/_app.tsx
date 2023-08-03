import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { initializeApollo } from "@/gql/apollo";
import { resetCss } from "@/styles/reset";
import { initMocks } from "@/mocks";

const apolloClient = initializeApollo();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      initMocks();
    }
  }, []);

  resetCss();

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
