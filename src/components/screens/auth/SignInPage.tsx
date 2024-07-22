import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Headline } from "../../atoms";
import { SignInForm } from "../../organisms";
import { AuthLayout } from "../../layout";

export const SignInPage: React.FC = () => {
  const { t } = useTranslation();

  const layoutConfig = {
    left: {
      component: (
        <>
          <Headline level={1}>{t("signIn.title.main")}</Headline>
          <SignInForm />
        </>
      ),
    },
    right: {
      component: (
        <Headline level={2}>
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
