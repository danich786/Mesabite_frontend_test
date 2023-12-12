"use clent";

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export default function RetrieveUser() {
  const { data: user } = useRetrieveUserQuery();

  return user.id;
}
