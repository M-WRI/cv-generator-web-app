import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "../../molecules";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../atoms";
import {
  ResendVerificationTokenFormValues,
  useResendVerificationToken,
} from "../../../services";
import { errorSerializer } from "../../../serializer";

import "./forms.styles.css";

export const ResendVerificationTokenForm: React.FC = () => {
  const methods = useForm<ResendVerificationTokenFormValues>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;
  const {
    resendVerificationToken,
    isLoading: resendVerificationTokenIsLoading,
  } = useResendVerificationToken({
    options: {
      onSuccess: () => {
        navigate("/");
      },
      onError: (error) => {
        errorSerializer<ResendVerificationTokenFormValues>(error, setError);
      },
    },
  });

  const onSubmit = (data: ResendVerificationTokenFormValues) => {
    resendVerificationToken({ variables: data });
  };

  const hasGeneralError = errors?.general && Object.values(errors?.general);

  return (
    <FormProvider {...methods}>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="email"
          type="email"
          placeholder={t(
            "resendVerificationToken.resendVerificationTokenForm.placeHolder.email"
          )}
          required
        />
        <Button type="submit" isLoading={resendVerificationTokenIsLoading}>
          {t(
            "resendVerificationToken.resendVerificationTokenForm.button.submit"
          )}
        </Button>
        {hasGeneralError && <ErrorMessage name="general" />}
      </form>
    </FormProvider>
  );
};
