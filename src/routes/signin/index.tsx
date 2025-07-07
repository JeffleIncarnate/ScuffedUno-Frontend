import { createFileRoute } from "@tanstack/react-router";

import { SignIn as LoginComponent } from "../../components/signin";

export const Route = createFileRoute("/signin/")({
  component: SignIn,
});

function SignIn() {
  return <LoginComponent />;
}
