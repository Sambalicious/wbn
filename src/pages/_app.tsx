import { SSRProvider } from "@react-aria/ssr";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import "react-responsive-modal/styles.css";
import { AppProvider } from "store/context";
import "../styles/abstracts/_base.scss";
import "../styles/abstracts/_index.scss";

export default function App({ Component, pageProps }: AppProps) {
  const { dehydratedState } = pageProps as { dehydratedState: unknown };

  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          useErrorBoundary: false,
          refetchOnWindowFocus: false,
        },
      },
    }),
  );

  return (
    <SSRProvider>
      <Toaster position="bottom-left" />
      <QueryClientProvider client={queryClient.current}>
        <ReactQueryDevtools position="bottom-right" />

        <Hydrate state={dehydratedState}>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </Hydrate>
      </QueryClientProvider>
    </SSRProvider>
  );
}
