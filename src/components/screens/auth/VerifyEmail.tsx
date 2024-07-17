import { useEffect } from "react";
import { useVerifyEmail } from "../../../services";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LoadingSpinner } from "../../atoms";
import { useError } from "../../../context";
import { StatusModal } from "../../molecules";
import { AuthLayout } from "../../layout";

type ErrorStatusKey =
  | "verificationTokenExpired"
  | "accountAlreadyVerified"
  | "invalidVerificationToken"
  | "verificationSuccessful";

// TECH DEBT: This looks like horse shit!
export const VerifyEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const { errorState } = useError();
  const {
    refetch: fetchVerificationEmail,
    isLoading: isLoadingVerifyEmail,
    isError,
    isSuccess,
  } = useVerifyEmail({ token: token ?? "" });

  const errorStatusMapping: Record<ErrorStatusKey, JSX.Element[]> = {
    verificationTokenExpired: [
      <h3 key="headline" />,
      <p />,
      <Link
        key="link"
        className="info-link"
        to={`/resend-verification-token/${token}`}
      />,
    ],
    accountAlreadyVerified: [
      <h3 key="headline" />,
      <p />,
      <Link key="link" className="info-link" to="/" />,
    ],
    invalidVerificationToken: [
      <h3 key="headline" />,
      <p />,
      <Link key="link" className="info-link" to="/signup" />,
    ],
    verificationSuccessful: [
      <h3 key="headline" />,
      <p />,
      <Link key="link" className="info-link" to="/login" />,
    ],
  };

  const getStatusComponents = (
    isError: boolean,
    errorState: any
  ): JSX.Element[] => {
    const errorCode = errorState?.error?.errorCode as ErrorStatusKey;
    if (isError && errorCode && errorStatusMapping[errorCode]) {
      return errorStatusMapping[errorCode];
    }
    return errorStatusMapping.verificationSuccessful;
  };

  const status = isSuccess ? "success" : isError ? "error" : null;

  const translationKey = isSuccess
    ? "success.general.verificationSuccessful"
    : isError
    ? errorState?.translationKey
    : "";

  const layoutConfig = {
    left: {
      component: isLoadingVerifyEmail ? (
        <LoadingSpinner />
      ) : (
        <StatusModal
          status={status}
          translationKey={translationKey}
          components={getStatusComponents(isError, errorState)}
        />
      ),
      className: "justify-center",
    },
  };

  useEffect(() => {
    if (token) {
      fetchVerificationEmail();
    } else {
      navigate("/");
    }
  }, [token, fetchVerificationEmail, navigate]);

  return <AuthLayout {...layoutConfig} />;
};

export default VerifyEmail;
