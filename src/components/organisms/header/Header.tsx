import { Headline } from "../../atoms";
import { MdLogin, MdLogout, MdOutlineAccountBox } from "react-icons/md";
import { NavContainer } from "../../molecules";

export const Header = () => {
  const navItems = [
    {
      translationKey: "Signin",
      Icon: MdLogin,
      action: () => console.log("signin"),
    },
    {
      translationKey: "Signup",
      Icon: MdOutlineAccountBox,
      action: () => console.log("signup"),
    },
    {
      translationKey: "Logout",
      Icon: MdLogout,
      action: () => console.log("logout"),
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
