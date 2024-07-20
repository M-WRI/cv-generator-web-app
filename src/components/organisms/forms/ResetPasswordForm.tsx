import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "../../molecules";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Text, FormContainer } from "../../atoms";
import { ResetPasswordFormValues, useResetPassword } from "../../../services";
import { errorSerializer } from "../../../serializer";


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
  const { resetPassword, isLoading: resetPasswordIsLoading } = useResetPassword(
    {
      token: token ?? "",
      options: {
        onSuccess: () => navigate("/"),
        onError: (error) => {
          errorSerializer<ResetPasswordFormValues>(error, setError);
        },
      },
    }
  );

  const onSubmit = (data: ResetPasswordFormValues) => {
    resetPassword({ variables: data });
  };

  const hasGeneralError = errors?.general && Object.values(errors?.general);

  return (
    <FormProvider {...methods}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="newPassword"
          type="password"
          placeholder={t(
            "resetPassword.resetPasswordForm.placeHolder.password"
          )}
          required
        />
        <Button type="submit" isLoading={resetPasswordIsLoading}>
          {t("resetPassword.resetPasswordForm.button.submit")}
        </Button>
        {hasGeneralError && (
          <Text
            className="text-error-500"
            translationKey={errors?.general?.message}
            components={[
              <Link key="signIn" className="info-link" to="/forgot-password" />,
            ]}
          />
        )}
      </FormContainer>
    </FormProvider>
  );
};
