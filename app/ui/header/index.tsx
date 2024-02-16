import Logo from "@/app/ui/logo";
import styles from './header.module.css';
import SocialList from "@/app/ui/social-list";
import Container from "@/app/ui/container";

export default function Header({ ...props }) {
  return (
    <Container as={'header'}
      className={styles.header}
      {...props}
    >
      <Logo />
      <SocialList>
        <SocialList.Item icon={'github'} />
        <SocialList.Item icon={'frontend-mentor'} />
        <SocialList.Item icon={'linkedin'} />
        <SocialList.Item icon={'twitter'} />
      </SocialList>
    </Container >
  );
}
