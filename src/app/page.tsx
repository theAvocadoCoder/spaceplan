"use client";

import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import styles from "./page.module.css";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className={styles.page}>
      <Button asChild px="2">
        <Link href="/room">{t("Label.new_room")}</Link>
      </Button>
    </div>
  );
}
