import { Skill } from "../../../services";
import { ScaleLine, Text } from "../../atoms";

export const CvSkills = ({ skills }: { skills?: Skill[] }) => {
  return (
    <div className="grid">
      <div className="bg-primary-100 p-4">
        <Text translationKey={"CV.skills.title"} className="text-black-500" />
      </div>
      {skills?.map((skill) => {
        return (
          <div className="p-4 border-b-2 border-black-500 grid gap-2">
            <Text translationKey={skill.skillName} />
            <ScaleLine scale={skill.skillLevel} />
          </div>
        );
      })}
    </div>
  );
};
