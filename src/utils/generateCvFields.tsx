import { useTranslation } from "react-i18next";
import { SectionTitle } from "../components/atoms";
import { SectionContent } from "../components/organisms";

export const generateCvFields = (testArray: any[], obj: any) => {
  const { t } = useTranslation();
  if (!obj) return null;

  return testArray
    .filter((testItem) => obj[testItem.type])
    .map((testItem, i) => (
      <div key={`${testItem.type}-${i}`}>
        <SectionTitle title={t(testItem.title)} />
        {obj[testItem.type].map((item: any, index: number) => (
          <SectionContent
            key={`${testItem.type}-${index}`}
            fields={testItem.fields}
            item={item}
          />
        ))}
      </div>
    ));
};
