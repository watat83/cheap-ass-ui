import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { SidebarProvider } from "@/context/SidebarContext";
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SidebarProvider>
    </ChakraProvider>
  );
}
