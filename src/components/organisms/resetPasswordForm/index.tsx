import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { InputField } from "../../molecules";
import { Button } from "../../atoms";
import { useResetPassword } from "../../../hooks/useResetPassword";
import "./resetPasswordForm.styles.css";
import { useParams } from "react-router-dom";

interface ResetPasswordFormValues {
  password: string;
}

export const ResetPasswordForm: React.FC = () => {
  const methods = useForm<ResetPasswordFormValues>();
  const { token } = useParams();
  const { t } = useTranslation();
  const { handleSubmit, setError } = methods;
  const { mutate } = useResetPassword(setError, token);

  const onSubmit = (data: ResetPasswordFormValues) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="reset-password-form-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          name="newPassword"
          type="password"
          placeholder={t(
            "resetPassword.resetPasswordForm.placeHolder.password"
          )}
          required
        />
        <Button type="submit" action={() => console.log("hi")}>
          {t("resetPassword.resetPasswordForm.button.submit")}
        </Button>
      </form>
    </FormProvider>
  );
};
