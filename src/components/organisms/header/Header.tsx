import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Headline } from "../../atoms";
import { NavContainer } from "../../molecules";
import { useIsAuthenticated, useSignOut } from "../../../services";
import { MdLogin, MdLogout, MdOutlineAccountBox } from "react-icons/md";

export const Header = () => {
  const { t } = useTranslation();
  const { signOut } = useSignOut();
  const { isAuthenticated } = useIsAuthenticated();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = isAuthenticated
    ? [
        {
          id: "signOut",
          translationKey: t("header.nav.navItems.signOut"),
          Icon: MdLogout,
          action: () => signOut(),
          path: "/signout",
        },
      ]
    : [
        {
          id: "signIn",
          translationKey: t("header.nav.navItems.signIn"),
          Icon: MdLogin,
          action: () => navigate("/"),
          path: "/",
        },
        {
          id: "signUp",
          translationKey: t("header.nav.navItems.signUp"),
          Icon: MdOutlineAccountBox,
          action: () => navigate("/signup"),
          path: "/signup",
        },
      ];

  return (
    <div className="p-4 flex items-center justify-between border-black-500 border-b-2">
      <div>
        <Headline level={4}>{t("header.logo.title")}</Headline>
      </div>
      <NavContainer items={navItems} currentPath={location.pathname} />
    </div>
  );
};
