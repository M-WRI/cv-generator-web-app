import { Headline } from "../../atoms";
import { MdLogin, MdLogout, MdOutlineAccountBox } from "react-icons/md";
import { NavContainer } from "../../molecules";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSignOut } from "../../../services";

export const Header = () => {
  const { t } = useTranslation();
  const { signOut } = useSignOut();
  const navigate = useNavigate();

  const navItems = [
    {
      translationKey: t("Signin"),
      Icon: MdLogin,
      action: () => navigate("/"),
    },
    {
      translationKey: t("Signup"),
      Icon: MdOutlineAccountBox,
      action: () => navigate("/signup"),
    },
    {
      translationKey: t("Logout"),
      Icon: MdLogout,
      action: () => signOut(),
    },
  ];
  return (
    <div className="p-4 flex items-center justify-between">
      <div>
        <Headline level={4}>CVS</Headline>
      </div>
      <NavContainer items={navItems} />
    </div>
  );
};
