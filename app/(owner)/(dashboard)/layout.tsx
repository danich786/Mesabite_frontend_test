import RequireAuth from "@/components/utils/RequireAuth";
import { Drawer, Footer } from "@/components/common";

interface Props {
  children: React.ReactNode;
}

export default function OwnerLayout({ children }: Props) {
  return (
    <RequireAuth>
      <Drawer />
      {children}
    </RequireAuth>
  );
}
