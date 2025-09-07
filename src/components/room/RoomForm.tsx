/** 
 * RoomForm is the Chakra UI form for the room.
 */

import { Button, Field, Input, NumberInput, Stack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import { errorMessageParser } from "@/lib/utils";
import { createRoomSchema, type RoomSchema } from "@/schemas/room";

export const RoomForm = () => {
  const t = useTranslations("Room");
  
  const { control, handleSubmit, formState: { errors } } = useForm<RoomSchema>({
    resolver: zodResolver(createRoomSchema),
    mode: "onChange",
    defaultValues: {
      width: 1,
      depth: 1,
      name: t("Label.new_project")
    }
  });

  const onSubmit: SubmitHandler<RoomSchema> = (data) => {
    console.log(data);
  }; 

  const parseErrorMessage = (errMessage: string | undefined) => {
    if (!errMessage) return "";
    if (errMessage === "Invalid input") return t("Validation.invalid_input")

    const {key, values} = errorMessageParser(errMessage);
  
    return t(key, values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        {/* Width Input */}
        <Field.Root required invalid={!!errors.width}>
          <Field.Label>
            {t("Label.width")}
            <Field.RequiredIndicator />
          </Field.Label>
          <Controller
            name="width"
            control={control}
            render={({ field }) => (
              <NumberInput.Root
                min={1} max={30}
                disabled={field.disabled}
                name={field.name}
                value={field.value?.toString() ?? ""}
                onValueChange={({ value }) => {
                  field.onChange(value ? Number(value) : undefined)
                }}
              >
                <NumberInput.Control />
                <NumberInput.Input px="2" onBlur={field.onBlur} />
              </NumberInput.Root>
            )}
          />
          <Field.ErrorText>{parseErrorMessage(errors.width?.message)}</Field.ErrorText>
        </Field.Root>

        {/* Depth Input */}
        <Field.Root required invalid={!!errors.depth}>
          <Field.Label>
            {t("Label.depth")}
            <Field.RequiredIndicator />
          </Field.Label>
          <Controller
            name="depth"
            control={control}
            render={({ field }) => (
              <NumberInput.Root
                min={1} max={30}
                disabled={field.disabled}
                name={field.name}
                value={field.value?.toString() ?? ""}
                onValueChange={({ value }) => {
                  field.onChange(value ? Number(value) : undefined)
                }}
              >
                <NumberInput.Control />
                <NumberInput.Input px="2" onBlur={field.onBlur} />
              </NumberInput.Root>
            )}
          />
          <Field.ErrorText>{parseErrorMessage(errors.depth?.message)}</Field.ErrorText>
        </Field.Root>

        {/* Name Input */}
        <Field.Root invalid={!!errors.name}>
          <Field.Label>{t("Label.name")}</Field.Label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input px="2" placeholder={t("Placeholder.name")} {...field} />
            )}
          />
          <Field.ErrorText>{parseErrorMessage(errors.name?.message)}</Field.ErrorText>
        </Field.Root>

        {/* Description Input */}
        <Field.Root invalid={!!errors.description}>
          <Field.Label>{t("Label.description")}</Field.Label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input px="2" placeholder={t("Placeholder.description")} {...field} />
            )}
          />
          <Field.ErrorText>{parseErrorMessage(errors.description?.message)}</Field.ErrorText>
        </Field.Root>
      </Stack>

      <Button size="md" type="submit" mt="4" px="2">{t("Label.save")}</Button>
    </form>
  )
}
