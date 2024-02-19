"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Contact } from "@/app/ui/contact";
import { ContactFormDataType } from "@/app/definitions";

export default function ContactContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormDataType>()
  const onSubmit: SubmitHandler<ContactFormDataType> = (data) => console.log(data)
  return (
    <Contact
      register={register}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}
