"use client";

import { Button } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

import { ColorModeButton } from "@/components/ui/color-mode";
import { useUIStore } from "@/lib/store";
import styles from "./page.module.css";

export default function Home() {
  const { mode, toggleMode } = useUIStore();
  const t = useTranslations("Home");

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>{t("title")}</h1>
        <ColorModeButton />
      </header>
      <main className={styles.main}>
        <p>
          <span>
            {t.rich("currentMode", { 
              code: (chunks) => <code>{chunks}</code>,
              mode
            })}
          </span>
          <Button onClick={toggleMode}>{t("toggleButton")}</Button>
        </p>
      </main>
      <footer className={styles.footer}>
        <p>{t("footer")}</p>
      </footer>
    </div>
  );
}
