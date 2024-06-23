import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "../../molecules";
import { useResetPassword } from "../../../hooks/useResetPassword";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorMessage } from "../../atoms";

import "./forms.styles.css";

interface ResetPasswordFormValues {
  password: string;
  general: string;
}

export const ResetPasswordForm: React.FC = () => {
  const methods = useForm<ResetPasswordFormValues>();
  const { token } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;
  const { mutate, isLoading } = useResetPassword(setError, token, {
    onSuccess: () => navigate("/"),
  });

  const onSubmit = (data: ResetPasswordFormValues) => {
    mutate(data);
  };

  const redirectToForgotPassword = () => {
    navigate("/forgot-password");
  };

  const hasGeneralError = errors?.general && Object.values(errors?.general);

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
        {hasGeneralError && (
          <ErrorMessage
            name="general"
            components={[
              <span
                key="signIn"
                className="info-link"
                onClick={() => redirectToForgotPassword()}
              />,
            ]}
          />
        )}
      </form>
    </FormProvider>
  );
};
