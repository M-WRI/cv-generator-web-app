import { useEffect } from "react";
import { useVerifyEmail } from "../../../services";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingSpinner } from "../../atoms";
import { useError } from "../../../context";
import { StatusModal } from "../../molecules";

export const VerifyEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const { errorState } = useError();
  const {
    refetch: fetchVerifactionEmail,
    isLoading: isLoadingVerifyEmail,
    isError,
    isSuccess,
  } = useVerifyEmail({
    token: token ?? "",
  });

  const status = isSuccess ? "success" : isError ? "error" : null;
  const message = isSuccess
    ? "success.general.verificationSuccessful"
    : isError
    ? errorState?.translationKey
    : "";

  useEffect(() => {
    if (token) {
      fetchVerifactionEmail();
    } else {
      navigate("/");
    }
  }, [token]);

  return (
    <div>
      {isLoadingVerifyEmail ? (
        <LoadingSpinner />
      ) : (
        <StatusModal status={status} message={message} token={token} />
      )}
    </div>
  );
};

export default VerifyEmail;
