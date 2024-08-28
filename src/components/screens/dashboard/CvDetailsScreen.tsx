import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadingSpinner } from "../../atoms";
import { useGetCvDetails } from "../../../services";
import {
  CvAddressDetails,
  CvProfileDetails,
  CvSkills,
} from "../../molecules/cvDetails";

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

  useEffect(() => {
    id && refetch();
  }, [id]);

  console.log(CvDetails, "<-------- cv details");

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
          </div>
        </>
      )}
    </>
  );
};

const BackButton = () => {
  return (
    <Link to="/dashboard" className="h-10 w-10 bg-primary-500">
      test
    </Link>
  );
};
