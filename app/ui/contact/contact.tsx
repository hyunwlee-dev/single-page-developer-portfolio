import { FormHTMLAttributes } from "react";
import { ContactForm } from ".";
import { ContactFormDataType } from "@/app/definitions";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import SocialList from "@/app/ui/social-list";
import styles from "./contact.module.css";
import Container from "@/app/ui/container";

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  register: UseFormRegister<ContactFormDataType>;
  errors: FieldErrors<ContactFormDataType>;
}

export default function Contact({
  register,
  errors,
  ...props
}: IProps) {
  return (
    <div className={styles.footer}>
      <Container
        as='section'
        className={styles['contact-wrapper']}
      >
        <h2 className={styles.heading2}>Contact</h2>
        <p className={styles.p}>
          {`I would love to hear about your project and how I\ncould help. Please fill in the form, and I’ll get back\nto you as soon as possible.`}
        </p>
        <ContactForm
          register={register}
          errors={errors}
          {...props}
        />
      </Container>
      <Container
        as='section'
        className={styles['social-link-wrapper']}
      >
        <hr className={styles.hr} />
        <div className={styles.bottom}>
          <span className={styles.author}>adamkeys</span>
          <SocialList
            className={styles.list}
          >
            <SocialList.Item icon={'github'} />
            <SocialList.Item icon={'frontend-mentor'} />
            <SocialList.Item icon={'linkedin'} />
            <SocialList.Item icon={'twitter'} />
          </SocialList>
        </div>
      </Container>
    </div>
  );
}
