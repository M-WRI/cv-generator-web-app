import { t } from "i18next";
import { Profile } from "../../../services";
import { Text } from "../../atoms";
import { CvContacts } from "./CvContacts";
import { useTranslation } from "react-i18next";

export const CvProfileDetails = ({
  profileDetails,
}: {
  profileDetails?: Profile;
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-primary-100 p-4">
        <Text
          translationKey={t("CV.contact.title")}
          className="text-black-500"
        />
      </div>
      <div>
        <div className="p-4 border-b-2 border-black-500">
          <Text translationKey={profileDetails?.firstName} />
        </div>
        <div className="p-4 border-b-2 border-black-500">
          <Text translationKey={profileDetails?.lastName} />
        </div>
        {profileDetails?.contacts.map((contact: any, i: number) => {
          return <CvContacts contact={contact} key={i} />;
        })}
      </div>
    </div>
  );
};
