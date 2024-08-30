import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadingSpinner, ScaleCircles, ScaleLine, Text } from "../../atoms";
import { useGetCvDetails } from "../../../services";
// import {
//   CvAddressDetails,
//   CvEducationsDetails,
//   CvExperienceDetails,
//   CvLanguagesDetails,
//   CvProfileDetails,
//   CvProfileSummaryDetails,
//   CvSkills,
// } from "../../molecules";
import { useTranslation } from "react-i18next";

export const CvDetailsScreen = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const {
    cvDetails,
    refetch,
    isFetching: CvDetailsIsFetching,
  } = useGetCvDetails({ id: id! });

  // const profileDetails = cvDetails?.profiles?.[0];
  // const addressDetails = cvDetails?.address?.[0];
  // const skills = cvDetails?.skills;
  // const languages = cvDetails?.languages;
  // const educations = cvDetails?.educations;
  // const experiences = cvDetails?.workExperiences;

  console.log(cvDetails, "<------ cvDetails");

  useEffect(() => {
    id && refetch();
  }, [id]);

  const result = checkIfTypeExists(TEST, cvDetails);

  return (
    <>
      {CvDetailsIsFetching ? (
        <div className="h-full flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <BackButton />
          <div>{result}</div>
        </>
      )}
    </>
  );
};

const BackButton = () => {
  return (
    <Link to="/dashboard" className="h-10 w-10 bg-primary-500">
      This will be the back button
    </Link>
  );
};

export const TEST = [
  {
    type: "profiles",
    title: "CV.contact.title",
    fields: [
      { field: "firstName" },
      { field: "lastName" },
      {
        field: "contacts",
        type: "array",
        fields: [
          {
            field: "group",
            fields: [
              { field: "type", style: "font-bold border-black-500 border-r-2" },
              { field: "link" },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "address",
    title: "CV.address.title",
    fields: [
      { field: "street" },
      {
        field: "group",
        fields: [
          { field: "state", style: "font-bold border-black-500 border-r-2" },
          { field: "zipCode" },
        ],
      },
      {
        field: "group",
        fields: [
          { field: "city", style: "font-bold border-black-500 border-r-2" },
          { field: "country" },
        ],
      },
    ],
  },
  {
    type: "educations",
    title: "CV.educations.title",
    fields: [
      { field: "degree" },
      { field: "school" },
      {
        field: "group",
        fields: [
          {
            field: "startMonth",
            style: "font-bold border-black-500 border-r-2",
          },
          { field: "startYear" },
        ],
      },
      {
        field: "group",
        fields: [
          { field: "endMonth", style: "font-bold border-black-500 border-r-2" },
          { field: "endYear" },
        ],
      },
      { field: "additionalInfo" },
    ],
  },
  {
    type: "skills",
    title: "CV.skills.title",
    fields: [
      { field: "skillName" },
      {
        field: "skillLevel",
        render: (value: number) => <ScaleLine scale={value} />,
      },
    ],
  },
  {
    type: "languages",
    title: "CV.languages.title",
    fields: [
      {
        field: "group",
        fields: [
          { field: "language", style: "font-bold border-black-500 border-r-2" },
          {
            field: "languageLevel",
            render: (value: number) => <ScaleCircles scale={value} />,
          },
        ],
      },
    ],
  },
  {
    type: "workExperiences",
    title: "CV.workExperiences.title",
    fields: [
      { field: "companyName", style: "font-bold" },
      { field: "position" },
      {
        field: "group",
        fields: [
          {
            field: "startMonth",
            style: "font-bold border-black-500 border-r-2",
          },
          { field: "startYear" },
        ],
      },
      {
        field: "group",
        fields: [
          { field: "endMonth", style: "font-bold border-black-500 border-r-2" },
          { field: "endYear" },
        ],
      },
      { field: "workDescription" },
    ],
  },
];

export const checkIfTypeExists = (testArray: any[], obj: any) => {
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

export const SectionTitle = ({ title }: { title: string }) => (
  <div className="bg-primary-100 p-4">
    <Text translationKey={title} className="text-black-500 font-bold" />
  </div>
);

export const SectionContent = ({
  fields,
  item,
}: {
  fields: any[];
  item: any;
}) => (
  <div>
    {fields.map((field: any, j: number) => (
      <FieldRenderer key={`${field.field}-${j}`} field={field} item={item} />
    ))}
  </div>
);

export const GroupRenderer = ({ field, item }: { field: any; item: any }) => (
  <div
    className={`border-b-2 border-black-500 grid grid-cols-2 ${
      field.style || ""
    }`}
  >
    {field.fields.map((subField: any, k: number) => (
      <div
        key={`${subField.field}-${k}`}
        className={`p-4 ${subField.style || ""}`}
      >
        {subField.render ? (
          subField.render(item[subField.field])
        ) : (
          <Text translationKey={item[subField.field]} />
        )}
      </div>
    ))}
  </div>
);

export const ArrayRenderer = ({
  field,
  items,
}: {
  field: any;
  items: any[];
}) => (
  <div className={`${field.style || ""}`}>
    {items.map((nestedItem: any, nestedIndex: number) => (
      <div key={`${field.field}-${nestedIndex}`}>
        {field.fields.map((nestedField: any, nestedFieldIndex: number) => (
          <FieldRenderer
            key={`${nestedField.field}-${nestedFieldIndex}`}
            field={nestedField}
            item={nestedItem}
          />
        ))}
      </div>
    ))}
  </div>
);

export const FieldRenderer = ({ field, item }: { field: any; item: any }) => {
  if (field.field === "group" && field.fields) {
    return <GroupRenderer field={field} item={item} />;
  } else if (field.type === "array" && Array.isArray(item[field.field])) {
    return <ArrayRenderer field={field} items={item[field.field]} />;
  } else {
    return (
      <div className={`p-4 border-b-2 border-black-500 ${field.style || ""}`}>
        {field.render ? (
          field.render(item[field.field])
        ) : (
          <Text translationKey={item[field.field]} />
        )}
      </div>
    );
  }
};
