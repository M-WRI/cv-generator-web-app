import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "../../molecules";
import { ErrorMessage, Text } from "../../atoms";
import { useNavigate } from "react-router-dom";
import { SignInFormValues, useSignIn } from "../../../services";
import { errorSerializer } from "../../../serializer";
import Cookies from "js-cookie";

import "./forms.styles.css";

export const SignInForm: React.FC = () => {
  const methods = useForm<SignInFormValues>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;

  const { signIn, isLoading } = useSignIn({
    options: {
      onSuccess: (response: any) => {
        Cookies.set("token", response.token, { expires: 7 });
        navigate("/dashboard");
      },
      onError: (error) => {
        errorSerializer<SignInFormValues>(error, setError);
      },
    },
  });

  const onSubmit = (data: SignInFormValues) => {
    signIn({ variables: data });
  };

  const redirectToSignUp = () => {
    navigate("/signup");
  };

  const redirectToForgotPassword = () => {
    navigate("/forgot-password");
  };

  const hasGeneralError = Object.values(errors).length;

  return (
    <FormProvider {...methods}>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="email"
          type="email"
          placeholder={t("signIn.signInForm.placeHolder.email")}
          required
        />
        <InputField
          name="password"
          type="password"
          placeholder={t("signIn.signInForm.placeHolder.password")}
          required
        />
        <Button type="submit" isLoading={isLoading}>
          {t("signIn.signInForm.button.submit")}
        </Button>
        {hasGeneralError ? (
          <ErrorMessage
            name="general"
            components={[
              <span
                key="signup"
                className="info-link"
                onClick={() => redirectToSignUp()}
              />,
              <span
                key="forgott-password"
                className="info-link"
                onClick={() => redirectToForgotPassword()}
              />,
            ]}
          />
        ) : (
          <Text
            translationKey="signIn.signInForm.registrationInfo"
            components={[
              <span
                key="signup"
                className="info-link"
                onClick={() => redirectToSignUp()}
              />,
              <span
                key="forgott-password"
                className="info-link"
                onClick={() => redirectToForgotPassword()}
              />,
            ]}
            fontSize="base"
          />
        )}
      </form>
    </FormProvider>
  );
};
