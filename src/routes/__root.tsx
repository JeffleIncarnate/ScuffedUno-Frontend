import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Provider } from "../components/provider";
import { Auth } from "../components/auth";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Provider>
        <Auth>
          <Outlet />
        </Auth>

        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </>
  );
}
