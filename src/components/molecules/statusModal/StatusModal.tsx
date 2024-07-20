import { Trans, useTranslation } from "react-i18next";
import { MdCheckCircleOutline, MdOutlineErrorOutline } from "react-icons/md";

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
      <MdOutlineErrorOutline className="text-2xl" />
    ) : status === "success" ? (
      <MdCheckCircleOutline className="text-2xl" />
    ) : null;

  return (
    <div className="max-w-[395px] text-primary-500 text-center grid gap-8 items-center p-4">
      {statusIcon}
      <Trans t={t} i18nKey={translationKey} components={components} />
    </div>
  );
};
