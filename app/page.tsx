import IntroduceContainer from "./container/introduce-container";
import styles from "./page.module.css";
import Header from "@/app/ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={styles.main}
      >
        <IntroduceContainer />
      </main>
    </>
  );
}
