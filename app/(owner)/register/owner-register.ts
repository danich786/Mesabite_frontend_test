import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useRegister() {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    resturant_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const [phone_no, setPhoneNo] = useState("");
  const is_owner = true;

  const {
    first_name,
    last_name,
    resturant_name,
    email,
    password,
    re_password,
  } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    register({
      is_owner,
      first_name,
      last_name,
      resturant_name,
      email,
      phone_no,
      password,
      re_password,
    })
      .unwrap()
      .then(() => {
        toast.success("Please check email to verify account");
        // router.push("/login");
      })
      .catch(() => {
        toast.error("Failed to register account");
      });
  };

  return {
    first_name,
    last_name,
    resturant_name,
    email,
    phone_no,
    setPhoneNo,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit,
  };
}
