"use client";

import { Button } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

import { RoomForm } from "@/components/room/RoomForm";
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
        {/* <p>
          <span>
            {t.rich("current_mode", { 
              code: (chunks) => <code>{chunks}</code>,
              mode
            })}
          </span>
          <Button px="2" onClick={toggleMode}>{t("toggle_button")}</Button>
        </p> */}
        <h2>{t("Label.form")}</h2>
        <RoomForm />
      </main>
      <footer className={styles.footer}>
        <p>{t("footer")}</p>
      </footer>
    </div>
  );
}
