import { Profile } from "../../../services";
import { Text } from "../../atoms";
import { useTranslation } from "react-i18next";

export const CvProfileSummaryDetails = ({
  profileDetails,
}: {
  profileDetails?: Profile;
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-primary-100 p-4">
        <Text
          translationKey={t("CV.profile.title")}
          className="text-black-500"
        />
      </div>
      <div className="p-4 border-b-2 border-black-500">
        {profileDetails?.profileSummary && (
          <Text translationKey={profileDetails?.profileSummary} />
        )}
      </div>
    </div>
  );
};
