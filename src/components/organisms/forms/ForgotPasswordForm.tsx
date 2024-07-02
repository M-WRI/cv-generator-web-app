import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "../../molecules";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../atoms";
import { ForgotPasswordFormValues, useForgotPassword } from "../../../services";

import "./forms.styles.css";

export const ForgotPasswordForm: React.FC = () => {
  const methods = useForm<ForgotPasswordFormValues>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;
  const { mutate, isLoading } = useForgotPassword(setError, {
    onSuccess: () => {
      navigate("/");
    },
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    mutate(data);
  };

  const hasGeneralError = errors?.general && Object.values(errors?.general);

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
        {hasGeneralError && <ErrorMessage name="general" />}
      </form>
    </FormProvider>
  );
};
