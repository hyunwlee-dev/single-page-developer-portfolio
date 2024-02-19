import { FormHTMLAttributes, useId } from "react";
import A11yHidden from "@/app/ui/a11y-hidden";
import Input from "@/app/ui/input";
import Button from "@/app/ui/button";
import styles from "./contact.module.css"
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { ContactFormDataType } from "@/app/definitions";
import TextArea from "@/app/ui/textarea";

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  register: UseFormRegister<ContactFormDataType>;
  errors: FieldErrors<ContactFormDataType>;
}

export default function ContactForm({ register, errors, ...props }: IProps) {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  return (
    <form
      className={styles['contact-form']}
      {...props}
    >
      <A11yHidden as='label' htmlFor={nameId}>
        name
      </A11yHidden>
      <Input
        className={styles.input}
        id={nameId}
        type={'text'}
        placeholder={'NAME'}
        {...register('name', {
          required: 'Required here',
        })}
        error={errors?.name?.message as string}
      />
      <A11yHidden as='label' htmlFor={emailId}>
        email
      </A11yHidden>
      <Input
        className={styles.input}
        id={emailId}
        type={'text'}
        placeholder={'EMAIL'}
        {...register('email', {
          required: 'Required here',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Sorry, invalid format here'
          }
        })}
        error={errors?.email?.message as string}
      />
      <A11yHidden as='label' htmlFor={messageId}>
        message
      </A11yHidden>
      <TextArea
        className={styles.textarea}
        id={messageId}
        placeholder={'MESSAGE'}
        {...register('message', {
          required: 'Required here',
        })}
        error={errors?.message?.message as string}
      />
      <Button className={styles.button} type="submit">
        send message
      </Button>
    </form>
  );
}
