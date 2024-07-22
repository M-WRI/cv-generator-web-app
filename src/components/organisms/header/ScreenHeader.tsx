import { useTranslation } from "react-i18next";
import { Headline } from "../../atoms";
import { NavContainer } from "../../molecules";
import { useHeaderNavigation } from "../../hooks";

export const Header = () => {
  const { navItems, currentPath } = useHeaderNavigation();
  const { t } = useTranslation();

  return (
    <div className="p-4 flex items-center justify-between border-black-500 border-t-2 sm:border-b-2">
      <div className="hidden sm:block">
        <Headline level={4}>{t("header.logo.title")}</Headline>
      </div>
      <NavContainer items={navItems} currentPath={currentPath} />
    </div>
  );
};
