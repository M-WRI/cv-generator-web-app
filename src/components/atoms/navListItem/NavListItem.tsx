import { Trans } from "react-i18next";
import { IconType } from "react-icons";

export const NavListItem = ({
  translationKey,
  Icon,
  action,
}: {
  translationKey: string;
  Icon?: IconType;
  action: () => void;
}) => {
  return (
    <li
      className="flex items-center gap-2 cursor-pointer text-sm hover:underline hover:text-primary-500 transition-all"
      onClick={() => action()}
    >
      <Trans i18nKey={translationKey} />
      {Icon && <Icon />}
    </li>
  );
};
