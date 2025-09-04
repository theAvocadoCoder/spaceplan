"use client";

import { Button } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { useUIStore } from "@/lib/store";
import styles from "./page.module.css";

export default function Home() {
  const { mode, toggleMode } = useUIStore();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>SpacePlan</h1>
        <ColorModeButton />
      </header>
      <main className={styles.main}>
        <p>
          <span>We are currently in <code>{mode}</code> mode.</span>
          <Button onClick={toggleMode}>Toggle Dimension Mode!</Button>
        </p>
      </main>
      <footer className={styles.footer}>
        <p>Made with love by theAvocaodoCoder</p>
      </footer>
    </div>
  );
}
