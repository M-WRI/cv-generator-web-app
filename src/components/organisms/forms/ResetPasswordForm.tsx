import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "../../molecules";
import { useResetPassword } from "../../../hooks/useResetPassword";
import { useParams } from "react-router-dom";

import "./forms.styles.css";

interface ResetPasswordFormValues {
  password: string;
}

export const ResetPasswordForm: React.FC = () => {
  const methods = useForm<ResetPasswordFormValues>();
  const { token } = useParams();
  const { t } = useTranslation();
  const { handleSubmit, setError } = methods;
  const { mutate, isLoading } = useResetPassword(setError, token);

  const onSubmit = (data: ResetPasswordFormValues) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="newPassword"
          type="password"
          placeholder={t(
            "resetPassword.resetPasswordForm.placeHolder.password"
          )}
          required
        />
        <Button type="submit" isLoading={isLoading}>
          {t("resetPassword.resetPasswordForm.button.submit")}
        </Button>
      </form>
    </FormProvider>
  );
};
