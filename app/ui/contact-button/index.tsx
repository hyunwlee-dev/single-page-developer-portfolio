"use client";

import useScrollDownToBottom from "@/app/hooks/useScrollDownToBottom";
import Button from "@/app/ui/button";
import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export default function ContactButton({ children }: IProps) {
  const scrollDownToBottom = useScrollDownToBottom();
  return (
    <Button onClick={scrollDownToBottom}>
      {children}
    </Button>
  );
}
