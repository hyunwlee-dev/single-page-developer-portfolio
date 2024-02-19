import IntroduceContainer from "@/app/container/introduce-container";
import ProjectsContainer from "@/app/container/projects-container";
import Header from "@/app/ui/header";
import ContactContainer from "@/app/container/contact-container";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={styles.main}
      >
        <IntroduceContainer />
        <ProjectsContainer />
        <ContactContainer />
      </main>
    </>
  );
}
