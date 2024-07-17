import { Trans, useTranslation } from "react-i18next";
import { MdCheckCircleOutline, MdOutlineErrorOutline } from "react-icons/md";
import styles from "./statusModal.module.css";

export const StatusModal = ({
  translationKey,
  status,
  components,
}: {
  translationKey?: string;
  status: "error" | "success" | null;
  components?: JSX.Element[];
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
      <Trans t={t} i18nKey={translationKey} components={components} />
    </div>
  );
};
