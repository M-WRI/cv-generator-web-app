import { IconType } from "react-icons";
import { NavListItem } from "../../atoms";

export const NavContainer = ({
  items,
}: {
  items: {
    translationKey: string;
    Icon?: IconType;
    action: () => void;
  }[];
}) => {
  return (
    <nav>
      <ul className="flex gap-4">
        {items.map(
          (
            item: {
              translationKey: string;
              Icon?: IconType;
              action: () => void;
            },
            index: number
          ) => {
            return <NavListItem {...item} key={index} />;
          }
        )}
      </ul>
    </nav>
  );
};
