import { useTranslation } from "react-i18next";
import { useIsAuthenticated, useSignOut } from "../../services";
import { useLocation, useNavigate } from "react-router-dom";
import { MdLogin, MdLogout, MdOutlineAccountBox } from "react-icons/md";

export const useHeaderNavigation = () => {
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

  return { navItems, currentPath: location.pathname };
};
