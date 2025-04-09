import * as yup from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0);
const minBirthDate = new Date(
  today.getFullYear() - 13,
  today.getMonth(),
  today.getDate()
);

export const onboardingSchema = yup.object({
  stepOne: yup.object({
    documentType: yup.string().required("El tipo de documento es obligatorio"),
    documentNumber: yup
      .string()
      .matches(/^\d+$/, "Solo se permiten números")
      .min(5, "Debe tener al menos 5 dígitos")
      .required("El número de documento es obligatorio"),
    birthDate: yup
      .date()
      .typeError("Debes seleccionar una fecha válida")
      .max(today, "La fecha no puede ser en el futuro")
      .test("min-age", "Debes tener al menos 13 años", (value) => {
        if (!value) return false;
        const selectedDate = new Date(value);
        selectedDate.setHours(0, 0, 0, 0);
        return selectedDate <= minBirthDate;
      })
      .required("La fecha de nacimiento es obligatoria"),
  }),
  stepTwo: yup.object({
    role: yup.string().required("Debes seleccionar un rol"),
  }),
});

export type OnboardingForm = yup.InferType<typeof onboardingSchema>;
