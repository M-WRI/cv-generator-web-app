import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Headline } from "../../atoms";
import { AuthLayout } from "../../layout";
import { ResetPasswordForm } from "../../organisms";

export const ResetPasswordPage: React.FC = () => {
  const { t } = useTranslation();

  const layoutConfig = {
    left: {
      component: <ResetPasswordForm />,
      className: "justify-center",
    },
    right: {
      component: (
        <Headline level={2}>
          {
            <Trans
              t={t}
              i18nKey="resetPassword.title.sub"
              components={[<span key="underline" className="underline" />]}
            />
          }
        </Headline>
      ),
    },
  };

  return <AuthLayout {...layoutConfig} />;
};
