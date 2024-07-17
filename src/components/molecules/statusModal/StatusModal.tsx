import { Trans, useTranslation } from "react-i18next";
import { MdCheckCircleOutline, MdOutlineErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./statusModal.module.css";

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
      <MdOutlineErrorOutline className={styles.statusIcon} />
    ) : status === "success" ? (
      <MdCheckCircleOutline className={styles.statusIcon} />
    ) : null;

  return (
    <div className={styles.statusModalContainer}>
      {statusIcon}
      <Trans
        t={t}
        i18nKey={message}
        components={[
          <h3 key="headline" className={styles.modalHeadline} />,
          <span className={styles.modalText} />,
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
