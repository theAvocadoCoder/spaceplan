import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return <p>{t("message")}</p>;
} 