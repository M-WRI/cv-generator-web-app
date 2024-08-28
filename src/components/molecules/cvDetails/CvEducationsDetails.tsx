import { Education } from "../../../services";
import { formatDates } from "../../../utils";
import { Text } from "../../atoms";

export const CvEducationsDetails = ({
  educations,
}: {
  educations?: Education[];
}) => {
  return (
    <div className="grid">
      <div className="bg-primary-100 p-4">
        <Text
          translationKey={"CV.education.title"}
          className="text-black-500"
        />
      </div>
      {educations?.map((education) => {
        return (
          <div key={education.id}>
            <div className="p-4 border-b-2 border-black-500">
              <Text translationKey={education?.school} />
            </div>
            <div className="p-4 border-b-2 border-black-500">
              <Text
                translationKey={formatDates(
                  education.startYear,
                  education.startMonth,
                  education.endYear,
                  education.endMonth
                )}
              />
            </div>
            <div className="grid grid-cols-[1fr_3fr]">
              <div className="p-4 border-b-2 border-r-2 border-black-500">
                <Text translationKey={"CV.education.placeholder.degree"} />
              </div>
              <div className="p-4 border-b-2 border-black-500">
                <Text translationKey={education?.degree} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
