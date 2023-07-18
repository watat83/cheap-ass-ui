import Dashboard from "@/components/Dashboard";
import Splash from "@/containers/Splash";
import { useEffect, useState } from "react";

export default function Home() {
  const [isReady, setReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReady(true);
      setShowSplash(false);
    }, 2000);

    const visitedBefore = localStorage.getItem("visitedBefore");
    if (visitedBefore) {
      setReady(true);
      setShowSplash(false);
    } else {
      localStorage.setItem("visitedBefore", "1");
      setReady(true);
      setShowSplash(true);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!isReady && showSplash) {
    return <Splash />;
  }

  return <Dashboard />;
}
