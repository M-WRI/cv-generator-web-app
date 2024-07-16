import { Trans, useTranslation } from "react-i18next";
import { MdCheckCircleOutline, MdOutlineErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import "./statusModal.styles.css";

export const StatusModal = ({
  message,
  status,
  token,
}: {
  message?: string;
  status: "error" | "success" | null;
  token?: string;
}) => {
  const { t } = useTranslation();

  const statusIcon =
    status === "error" ? (
      <MdOutlineErrorOutline className="status-icon" />
    ) : status === "success" ? (
      <MdCheckCircleOutline className="status-icon" />
    ) : null;

  return (
    <div className="status-modal-container">
      {statusIcon}
      <Trans
        t={t}
        i18nKey={message}
        components={[
          <h2 key="headline" className="modal-headline" />,
          <span className="modal-text" />,
          <Link
            key="link"
            className="info-link"
            to={`/resend-verification-token/${token}`}
          />,
        ]}
      />
    </div>
  );
};
