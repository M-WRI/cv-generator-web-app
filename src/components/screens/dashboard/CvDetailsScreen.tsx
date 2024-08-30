import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadingSpinner } from "../../atoms";
import { useGetCvDetails } from "../../../services";
import {
  CvAddressDetails,
  CvEducationsDetails,
  CvExperienceDetails,
  CvLanguagesDetails,
  CvProfileDetails,
  CvProfileSummaryDetails,
  CvSkills,
} from "../../molecules";

export const CvDetailsScreen = () => {
  const { id } = useParams<{ id: string }>();
  const {
    CvDetails,
    refetch,
    isFetching: CvDetailsIsFetching,
  } = useGetCvDetails({ id: id! });

  const profileDetails = CvDetails?.profiles?.[0];
  const addressDetails = CvDetails?.address?.[0];
  const skills = CvDetails?.skills;
  const languages = CvDetails?.languages;
  const educations = CvDetails?.educations;
  const experiences = CvDetails?.workExperiences;

  useEffect(() => {
    id && refetch();
  }, [id]);

  return (
    <>
      {CvDetailsIsFetching ? (
        <div className="h-full flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <BackButton />
          <div>
            <CvProfileDetails profileDetails={profileDetails} />
            <CvAddressDetails address={addressDetails} />
            <CvSkills skills={skills} />
            <CvLanguagesDetails languages={languages} />
            <CvProfileSummaryDetails profileDetails={profileDetails} />
            <CvEducationsDetails educations={educations} />
            <CvExperienceDetails experiences={experiences} />
          </div>
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
