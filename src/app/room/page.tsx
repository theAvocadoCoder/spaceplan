"use client";

import { HStack, Switch, Text, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Rnd } from "react-rnd";

import { RoomForm } from "@/components/room/RoomForm";
import { useUIStore } from "@/lib/store";
import styles from "./room.module.css";

export default function Home() {
  const { mode, toggleMode } = useUIStore();
  const t = useTranslations("Room");

  return (
    <div className={styles.room_container}>
      <Rnd 
        className={styles.room_settings}
        minWidth={200}
        maxWidth={"33%"}
        enableResizing={{ right: true }}
        disableDragging
      >
        <VStack align="start">
          <HStack>
            <Switch.Root 
              size="lg"
              checked={mode === "3D"}
              onCheckedChange={() => toggleMode()}
            >
              <Switch.HiddenInput />
              <Switch.Control bg={{base: "gray.200", _dark: "gray.600"}}>
                <Switch.Thumb bg={{base: "white", _dark: "black"}} />
                <Switch.Indicator fallback={<Text textStyle="xs" fontSize="medium">{mode}</Text>}>
                  <Text textStyle="xs" fontSize="medium">{mode}</Text>
                </Switch.Indicator>
              </Switch.Control>
            </Switch.Root>
            <Text>{t("Label.toggle_mode")}</Text>
          </HStack>
          <Text>{t("Label.form")}</Text>
          <RoomForm />
        </VStack>
      </Rnd>
      <div className={styles.room_canvas}></div>
      <div className={styles.room_tools}>
        <Text>{t("Label.tools")}</Text>
      </div>
    </div>
  );
}
