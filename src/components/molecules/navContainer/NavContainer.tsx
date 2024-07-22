import { IconType } from "react-icons";
import { NavListItem } from "../../atoms";

export const NavContainer = ({
  items,
  currentPath,
}: {
  items: {
    translationKey: string;
    id: string;
    Icon?: IconType;
    action: () => void;
    path: string;
  }[];
  currentPath: string;
}) => {
  return (
    <nav>
      <ul className="flex gap-4">
        {items.map(
          (item: {
            translationKey: string;
            id: string;
            Icon?: IconType;
            action: () => void;
            path: string;
          }) => {
            return (
              <NavListItem
                {...item}
                key={item.id}
                isActive={currentPath === item.path}
              />
            );
          }
        )}
      </ul>
    </nav>
  );
};
