import { Trans, useTranslation } from "react-i18next";
import { Headline } from "../../atoms";
import { AuthLayout } from "../../layout";
import { ForgotPasswordForm } from "../../organisms";

export const ForgotPasswordPage = () => {
  const { t } = useTranslation();

  const layoutConfig = {
    left: {
      component: <ForgotPasswordForm />,
      className: "justify-center",
    },
    right: {
      component: (
        <Headline level={2}>
          {<Trans t={t} i18nKey="forgotPassword.title.sub" />}
        </Headline>
      ),
    },
  };

  return <AuthLayout {...layoutConfig} />;
};
