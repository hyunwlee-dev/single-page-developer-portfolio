import styles from "./page.module.css";
import Header from "@/app/ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1 className={styles["font-medium"]}>SpaceGrotesk-Bold</h1>
        <h2>SpaceGrotesk-Medium</h2>
        <h3>SpaceGrotesk-VariableFont_wght</h3>
        hi there! from hyunwlee
      </main >
    </>
  );
}
