import Dashboard from "@/components/Dashboard";
import Splash from "@/containers/Splash";
import { useEffect, useState } from "react";

export default function Home() {
  // ADD SPlASH SCREEN
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);

  if (!isReady) {
    return <Splash />;
  }

  return <Dashboard />;
}
