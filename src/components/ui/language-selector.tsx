"use client";

import { Button, Menu, Portal } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FaGlobe } from "react-icons/fa";

const languages = [
  { code: "en", name: "English", nativeName: "EN" },
  { code: "fr", name: "Français", nativeName: "FR" },
];

export function LanguageSelector() {
  const locale = useLocale();
  const t = useTranslations("Language");
  const router = useRouter();

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = async (newLocale: string) => {
    // Use Next.js server action to set the cookie
    const response = await fetch('/api/locale', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ locale: newLocale }),
    });

    if (response.ok) {
      // Refresh the page to apply the new locale
      router.refresh();
    }
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="ghost"
          size="sm" px="2"
          aria-label={t("selector_label")}
        >
          <FaGlobe />
          {currentLanguage.nativeName}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content p="2">
            {languages.map((language) => (
              <Menu.Item
                px="2" py="1"
                key={language.code}
                value={language.code}
                onClick={() => handleLanguageChange(language.code)}
              >
                {language.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
