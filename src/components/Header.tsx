"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import { ColorModeButton } from "@/components/ui/color-mode";
import { LanguageSelector } from "@/components/ui/language-selector";
import styles from "./components.module.css";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("Home");
  const pathname = usePathname();
  const hideHeader = pathname.startsWith("/editor") || pathname.startsWith("/auth");

  if (hideHeader) return null;

  return (
    <header className={styles.header}>
      <Link href="/">{t("title")}</Link>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <LanguageSelector />
        <ColorModeButton />
      </div>
    </header>
  );
}
