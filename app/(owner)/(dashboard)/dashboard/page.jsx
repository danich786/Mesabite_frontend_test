"use client";

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import Spinner from "@/components/common/Spinner";

export default function RetrieveUser() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  return (
    <div>
      <div>{user.id}</div>
      <div>
        {user.first_name} {user.last_name}
      </div>
      <div>{user.email}</div>
    </div>
  );
}
