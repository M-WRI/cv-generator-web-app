import { WorkExperience } from "../../../services";
import { formatDates } from "../../../utils";
import { Text } from "../../atoms";

export const CvExperienceDetails = ({
  experiences,
}: {
  experiences?: WorkExperience[];
}) => {
  return (
    <div className="grid">
      <div className="bg-primary-100 p-4">
        <Text
          translationKey={"CV.experience.title"}
          className="text-black-500"
        />
      </div>
      {experiences?.map((experience) => {
        return (
          <div key={experience.id}>
            <div className="p-4 border-b-2 border-black-500">
              <Text
                translationKey={experience?.companyName}
                className="font-bold"
              />
            </div>
            <div className="p-4 border-b-2 border-black-500">
              <Text translationKey={experience?.position} />
            </div>
            <div className="p-4 border-b-2 border-black-500">
              <Text
                translationKey={formatDates(
                  experience.startYear,
                  experience.startMonth,
                  experience.endYear,
                  experience.endMonth
                )}
              />
            </div>
            <div className="p-4 border-b-2 border-black-500">
              <Text translationKey={experience.workDescription} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
