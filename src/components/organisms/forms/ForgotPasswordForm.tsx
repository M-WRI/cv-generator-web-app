import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "../../molecules";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../atoms";
import { ForgotPasswordFormValues, useForgotPassword } from "../../../services";
import { errorSerializer } from "../../../serializer";

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
  const { forgotPassword, isLoading: forgotPasswordIsLoading } =
    useForgotPassword({
      options: {
        onSuccess: () => {
          navigate("/");
        },
        onError: (error: any) => {
          errorSerializer<ForgotPasswordFormValues>(error, setError);
        },
      },
    });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    forgotPassword({ variables: data });
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
        <Button type="submit" isLoading={forgotPasswordIsLoading}>
          {t("forgotPassword.forgotPasswordForm.button.submit")}
        </Button>
        {hasGeneralError && <ErrorMessage name="general" />}
      </form>
    </FormProvider>
  );
};
