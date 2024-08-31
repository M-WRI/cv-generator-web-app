import { render } from "react-dom";
import { ScaleCircles, ScaleLine } from "../components/atoms";
import { formatMonth } from "../utils";

export const CV_DETAILS_CONFIG = [
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
            render: (month: number) => formatMonth(month),
          },
          { field: "startYear" },
        ],
      },
      {
        field: "group",
        fields: [
          {
            field: "endMonth",
            style: "font-bold border-black-500 border-r-2",
            render: (month: number) => formatMonth(month),
          },
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
            render: (month: number) => formatMonth(month),
          },
          { field: "startYear" },
        ],
      },
      {
        field: "group",
        fields: [
          {
            field: "endMonth",
            style: "font-bold border-black-500 border-r-2",
            render: (month: number) => formatMonth(month),
          },
          { field: "endYear" },
        ],
      },
      { field: "workDescription" },
    ],
  },
];
