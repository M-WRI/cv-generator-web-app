import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadingSpinner } from "../../atoms";
import { useGetCvDetails } from "../../../services";
import { CV_DETAILS_CONFIG } from "../../../constants";
import { generateCvFields } from "../../../utils";

export const CvDetailsScreen = () => {
  const { id } = useParams<{ id: string }>();
  const {
    cvDetails,
    refetch,
    isFetching: CvDetailsIsFetching,
  } = useGetCvDetails({ id: id! });

  useEffect(() => {
    id && refetch();
  }, [id]);

  const result = generateCvFields(CV_DETAILS_CONFIG, cvDetails);

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
