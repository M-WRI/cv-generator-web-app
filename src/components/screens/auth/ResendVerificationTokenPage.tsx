import { Trans, useTranslation } from "react-i18next";
import { Headline, LoadingSpinner } from "../../atoms";
import { AuthLayout } from "../../layout";
import { ResendVerificationTokenForm } from "../../organisms";
import { useNavigate, useParams } from "react-router-dom";
import { useVerifyEmail } from "../../../services";
import { useEffect } from "react";

export const ResendVerificationToken = () => {
  const { t } = useTranslation();
  const { token } = useParams();
  const navigate = useNavigate();

  const { refetch: fetchVerifactionEmail, isLoading: isLoadingVerifyEmail } =
    useVerifyEmail({
      token: token ?? "",
      options: {
        onError: (error) => {
          error.errorCode !== "verificationTokenExpired" && navigate("/");
        },
        onSuccess: () => {
          navigate("/");
        },
      },
    });

  const layoutConfig = {
    left: {
      component: isLoadingVerifyEmail ? (
        <LoadingSpinner />
      ) : (
        <ResendVerificationTokenForm />
      ),
      className: "justify-center",
    },
    right: {
      component: (
        <Headline level={2}>
          {<Trans t={t} i18nKey="resendVerificationToken.title.sub" />}
        </Headline>
      ),
    },
  };

  useEffect(() => {
    if (token) {
      fetchVerifactionEmail();
    } else {
      navigate("/");
    }
  }, [token]);

  return <AuthLayout {...layoutConfig} />;
};
