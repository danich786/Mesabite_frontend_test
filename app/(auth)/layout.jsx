export const metadata = {
  title: "MesaBite | Registration",
};

import Provider from "@/redux/provider";

import Verify from "@/components/utils/Verify";

export default function AuthLayout({ children }) {
  // ;
  return (
    <Provider>
      <Verify />
      {children}
    </Provider>
  );
}
