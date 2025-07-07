import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Splash } from "../components/splash";
import { Navbar } from "../components/navbar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    document.title = "Home | Scuffed Uno";
  }, []);

  return (
    <>
      <Navbar />
      <Splash />
    </>
  );
}
