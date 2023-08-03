import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { SidebarProvider } from "@/context/SidebarContext";
import Layout from "@/components/Layout/Layout";
import { useEffect, useState } from "react";
import Splash from "@/containers/Splash";

export default function App({ Component, pageProps }: AppProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <SidebarProvider>
        {showSplash ? (
          <Splash />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </SidebarProvider>
    </ChakraProvider>
  );
}
