import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getMessages, getLocale, getTranslations } from "next-intl/server";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {Provider} from '@/components/ui/provider'; 
import QueryProviders from './query-providers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider messages={messages} locale={locale} timeZone="UTC">
          <QueryProviders>
            <Provider>{children}</Provider>
          </QueryProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
