import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Headline } from "../../atoms";
import { SignInForm } from "../../organisms";
import { AuthLayout } from "../../layout";
import "./auth.styles.css";

export const SignInPage: React.FC = () => {
  const { t } = useTranslation();

  const layoutConfig = {
    left: {
      component: (
        <>
          <Headline className="auth-screen-header" level={1}>
            {t("signIn.title.main")}
          </Headline>
          <SignInForm />
        </>
      ),
    },
    right: {
      component: (
        <Headline level={2} className="auth-screen-sub-header">
          {
            <Trans
              t={t}
              i18nKey="signIn.title.sub"
              components={[<span key="underline" className="underline" />]}
            />
          }
        </Headline>
      ),
    },
  };

  return <AuthLayout {...layoutConfig} />;
};
