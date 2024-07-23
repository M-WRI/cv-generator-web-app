import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "../../molecules";
import { Text } from "../../atoms";
import { Link, useNavigate } from "react-router-dom";
import { SignInFormValues, useSignIn } from "../../../services";
import { errorSerializer } from "../../../serializer";
import Cookies from "js-cookie";

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
        Cookies.set("token", response.token);
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
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-8"
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
                key="forgott-password"
                className="text-primary-500 font-bold underline"
                to="/forgot-password"
              />,
            ]}
          />
        ) : (
          <Text
            translationKey="signIn.signInForm.registrationInfo"
            components={[
              <Link
                key="signup"
                className="text-primary-500 font-bold underline"
                to="/signup"
              />,
              <Link
                key="forgott-password"
                className="text-primary-500 font-bold underline"
                to="/forgot-password"
              />,
            ]}
          />
        )}
      </form>
    </FormProvider>
  );
};
