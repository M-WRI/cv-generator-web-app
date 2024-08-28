import { Language } from "../../../services";
import { ScaleCircles, Text } from "../../atoms";

export const CvLanguagesDetails = ({
  languages,
}: {
  languages?: Language[];
}) => {
  return (
    <div className="grid">
      <div className="bg-primary-100 p-4">
        <Text
          translationKey={"CV.languages.title"}
          className="text-black-500"
        />
      </div>
      {languages?.map((skill) => {
        return (
          <div>
            <div className="p-4 border-b-2 border-black-500 grid gap-2">
              <Text translationKey={skill.language} />
            </div>
            <div className="grid grid-cols-[1fr_3fr]">
              <div className="p-4 border-b-2 border-r-2 border-black-500">
                <Text translationKey={"CV.languages.placeholder.level"} />
              </div>
              <div className="p-4 border-b-2 border-black-500 grid gap-2">
                <ScaleCircles scale={skill.languageLevel} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
