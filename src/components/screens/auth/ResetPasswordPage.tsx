import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Headline } from "../../atoms";
import { AuthLayout } from "../../layout";
import { ResetPasswordForm } from "../../organisms";
import "./auth.styles.css";

export const ResetPasswordPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout
      left={<ResetPasswordForm />}
      right={
        <Headline level={2} className="sign-up-sub-header">
          {
            <Trans
              t={t}
              i18nKey="resetPassword.title.sub"
              components={[<span key="underline" className="underline" />]}
            />
          }
        </Headline>
      }
    />
  );
};
