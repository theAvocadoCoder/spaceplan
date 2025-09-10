"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import styles from "./components.module.css";

export default function Footer() {
  const t = useTranslations("Home");
  const pathname = usePathname();
  const hideFooter = pathname.startsWith("/editor") || pathname.startsWith("/auth");

  if (hideFooter) return null;

  return (
    <footer className={styles.footer}>
      <p>{t("footer")}</p>
    </footer>
  );
}
