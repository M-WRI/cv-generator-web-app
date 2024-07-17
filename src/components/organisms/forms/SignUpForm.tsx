import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "../../molecules";
import { InputErrorMessage, Text } from "../../atoms";
import { Link, useNavigate } from "react-router-dom";
import { SignUpFormValues, useSignUp } from "../../../services";
import { errorSerializer } from "../../../serializer";

import styles from "./forms.module.css";

export const SignUpForm: React.FC = () => {
  const methods = useForm<SignUpFormValues>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;
  const { signUp, isLoading: signUpIsLoading } = useSignUp({
    options: {
      onSuccess: () => {
        navigate("/");
      },
      onError: (error) => {
        errorSerializer<SignUpFormValues>(error, setError);
      },
    },
  });

  const onSubmit = (data: SignUpFormValues) => {
    signUp({ variables: data });
  };

  const hasGeneralError = errors?.general && Object.values(errors?.general);

  return (
    <FormProvider {...methods}>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="email"
          type="email"
          placeholder={t("signUp.signUpForm.placeHolder.email")}
          error={errors?.email ? errors.email : undefined}
        />
        <InputField
          name="username"
          type="text"
          placeholder={t("signUp.signUpForm.placeHolder.username")}
          error={errors?.username ? errors.username : undefined}
        />
        <InputField
          name="password"
          type="password"
          placeholder={t("signUp.signUpForm.placeHolder.password")}
          error={errors?.password ? errors.password : undefined}
        />
        <Button type="submit" isLoading={signUpIsLoading}>
          {t("signUp.signUpForm.button.submit")}
        </Button>
        {hasGeneralError ? (
          <InputErrorMessage
            name="general"
            components={[
              <Link key="signup" className="info-link" to="/signup" />,
              <Link
                key="forgot-password"
                className="info-link"
                to="/forgot-password"
              />,
            ]}
          />
        ) : (
          <Text
            translationKey="signUp.signUpForm.signInInfo"
            components={[
              <Link key="signIn" className="info-link" to="/" />,
              <Link
                key="forgot-password"
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
