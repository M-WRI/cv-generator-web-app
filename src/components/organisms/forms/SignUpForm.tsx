import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "../../molecules";
import { FormContainer, Text } from "../../atoms";
import { Link, useNavigate } from "react-router-dom";
import { SignUpFormValues, useSignUp } from "../../../services";
import { errorSerializer } from "../../../serializer";

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
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
          <Text
            className="text-error-500"
            translationKey={errors?.general?.message}
            components={[
              <Link
                key="signup"
                className="text-primary-500 font-bold underline"
                to="/signup"
              />,
              <Link
                key="forgot-password"
                className="text-primary-500 font-bold underline"
                to="/forgot-password"
              />,
            ]}
          />
        ) : (
          <Text
            translationKey="signUp.signUpForm.signInInfo"
            components={[
              <Link
                key="signIn"
                className="text-primary-500 font-bold underline"
                to="/"
              />,
              <Link
                key="forgot-password"
                className="text-primary-500 font-bold underline"
                to="/forgot-password"
              />,
            ]}
          />
        )}
      </FormContainer>
    </FormProvider>
  );
};
