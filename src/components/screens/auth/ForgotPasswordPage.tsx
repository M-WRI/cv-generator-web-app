import { Trans, useTranslation } from "react-i18next";
import { Headline } from "../../atoms";
import { AuthLayout } from "../../layout";
import { ForgotPasswordForm } from "../../organisms";
import "./auth.styles.css";

export const ForgotPasswordPage = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout
      left={<ForgotPasswordForm />}
      right={
        <Headline level={2} className="sign-up-sub-header">
          {<Trans t={t} i18nKey="forgotPassword.title.sub" />}
        </Headline>
      }
    />
  );
};
