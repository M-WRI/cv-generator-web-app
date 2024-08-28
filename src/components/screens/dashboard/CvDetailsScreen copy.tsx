import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadingSpinner } from "../../atoms";
import { useGetCvDetails } from "../../../services";
import { CvProfileDetails } from "../../molecules/cvDetails";

export const CvDetailsScreen = () => {
  const { id } = useParams<{ id: string }>();
  const {
    CvDetails,
    refetch,
    isFetching: CvDetailsIsFetching,
  } = useGetCvDetails({ id: id! });

  const profileDetails = CvDetails?.profiles?.[0];

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
        <div>
          <Link to="/dashboard" className="h-10 w-10 bg-primary-500">
            test
          </Link>
          <CvProfileDetails profileDetails={profileDetails} />
        </div>
      )}
    </>
  );
};
