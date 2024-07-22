import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Headline } from "../../atoms";
import { SignUpForm } from "../../organisms";
import { AuthLayout } from "../../layout";

export const SignUpPage: React.FC = () => {
  const { t } = useTranslation();

  const layoutConfig = {
    left: {
      component: (
        <>
          <Headline level={1}>{t("signUp.title.main")}</Headline>
          <SignUpForm />
        </>
      ),
    },
    right: {
      component: (
        <Headline level={2}>
          {
            <Trans
              t={t}
              i18nKey="signUp.title.sub"
              components={[<span key="underline" className="underline" />]}
            />
          }
        </Headline>
      ),
    },
  };

  return <AuthLayout {...layoutConfig} />;
};
