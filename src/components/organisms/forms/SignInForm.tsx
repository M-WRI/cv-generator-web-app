import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "../../molecules";
import { InputErrorMessage, Text } from "../../atoms";
import { Link, useNavigate } from "react-router-dom";
import { SignInFormValues, useSignIn } from "../../../services";
import { errorSerializer } from "../../../serializer";
import Cookies from "js-cookie";

import styles from "./forms.module.css";

export const SignInForm: React.FC = () => {
  const methods = useForm<SignInFormValues>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = methods;

  const { signIn, isLoading } = useSignIn({
    options: {
      onSuccess: (response) => {
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

  const hasGeneralError = Object.values(errors).length;

  return (
    <FormProvider {...methods}>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => clearErrors("general")}
      >
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
          <InputErrorMessage
            name="general"
            components={[
              <Link key="signup" className="info-link" to="/signup" />,
              <Link
                key="forgott-password"
                className="info-link"
                to="/forgot-password"
              />,
            ]}
          />
        ) : (
          <Text
            translationKey="signIn.signInForm.registrationInfo"
            components={[
              <Link key="signup" className="info-link" to="/signup" />,
              <Link
                key="forgott-password"
                className="info-link"
                to="/forgot-password"
              />,
            ]}
            fontSize="base"
          />
        )}
      </form>
    </FormProvider>
  );
};
