import { Text } from "../../atoms";

export const CvContacts = ({
  contact,
}: {
  contact: { type: string; link: string };
}) => {
  return (
    <div className="grid grid-cols-[1fr_3fr]">
      <div className="p-4 border-b-2 border-r-2 border-black-500">
        <Text translationKey={contact?.type} />
      </div>
      <div className="p-4 border-b-2 border-black-500">
        <Text translationKey={contact?.link} />
      </div>
    </div>
  );
};
