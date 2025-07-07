import { useQuery } from "@tanstack/react-query";
import { auth } from "../core/queries/auth";
import { AuthContext } from "../core/context/auth-context";

export const Auth = ({ children }: { children: React.ReactNode }) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["api", "auth", "actions", "me"],
    queryFn: auth,
    retry: 0,
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return <AuthContext value={data}>{children}</AuthContext>;
};
