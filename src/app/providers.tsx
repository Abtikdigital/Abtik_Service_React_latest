"use client";

import { Provider } from "react-redux";
import store from "@/utils/store/store";
import { ReactLenis } from "@studio-freight/react-lenis";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ReactLenis root>
        {children}
      </ReactLenis>
    </Provider>
  );
}
