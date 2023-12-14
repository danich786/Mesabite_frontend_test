import { StyledEngineProvider } from "@mui/material/styles";

import Provider from "@/redux/provider";

import Verify from "@/components/utils/Verify";

export const metadata = {
  title: "MesaBite | Registration",
};

export default function AuthLayout({ children }) {
  // ;
  return (
    <StyledEngineProvider injectFirst>
      <Provider>
        <Verify />
        {children}
      </Provider>
    </StyledEngineProvider>
  );
}
