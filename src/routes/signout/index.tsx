import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { signout } from "../../core/queries/signout";

export const Route = createFileRoute("/signout/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isPending, isError, error } = useQuery({
    queryKey: ["api", "auth", "actions", "signout"],
    queryFn: signout,
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return <div>Hello "/signout/"!</div>;
}
