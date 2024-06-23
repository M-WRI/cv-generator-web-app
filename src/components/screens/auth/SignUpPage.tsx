import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Headline } from "../../atoms";
import { SignUpForm } from "../../organisms";
import { AuthLayout } from "../../layout";
import "./auth.styles.css";

export const SignUpPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout
      left={
        <>
          <Headline className="auth-screen-header" level={1}>
            {t("signUp.title.main")}
          </Headline>
          <SignUpForm />
        </>
      }
      right={
        <Headline level={2} className="auth-screen-sub-header">
          {
            <Trans
              t={t}
              i18nKey="signUp.title.sub"
              components={[<span key="underline" className="underline" />]}
            />
          }
        </Headline>
      }
    />
  );
};
