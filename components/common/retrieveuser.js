"use clent";

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export default function RetrieveUser() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();

  if (!isLoading && !isFetching) {
    return user.id;
  }
}
