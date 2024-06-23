import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useForgotPassword } from "../../../hooks";
import { Button, InputField } from "../../molecules";

import "./forms.styles.css";

interface ForgotPasswordFormValues {
  email: string;
}

export const ForgotPasswordForm: React.FC = () => {
  const methods = useForm<ForgotPasswordFormValues>();
  const { t } = useTranslation();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;
  const { mutate, isLoading } = useForgotPassword(setError);

  const onSubmit = (data: ForgotPasswordFormValues) => {
    mutate(data);
  };

  console.log(errors, "<------ errors");

  return (
    <FormProvider {...methods}>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="email"
          type="email"
          placeholder={t("forgotPassword.forgotPasswordForm.placeHolder.email")}
          required
        />
        <Button type="submit" isLoading={isLoading}>
          {t("forgotPassword.forgotPasswordForm.button.submit")}
        </Button>
      </form>
    </FormProvider>
  );
};
