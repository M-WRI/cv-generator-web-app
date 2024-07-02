import { useParams } from "react-router-dom";
import { useGetCvDetails } from "../../../hooks";
import { useEffect } from "react";
import { LoadingSpinner } from "../../atoms";

export const CvDetailsScreen = () => {
  const { id } = useParams<{ id: string }>();
  const {
    CvDetails,
    refetch,
    isFetching: CvDetailsIsFetching,
  } = useGetCvDetails({ id: id! });

  console.log(CvDetails?.data, "<------- cv details");

  useEffect(() => {
    id && refetch();
  }, [id]);

  return (
    <>
      {CvDetailsIsFetching ? (
        <div className="cv-details-loading">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <h1>this is cv details</h1>
        </div>
      )}
    </>
  );
};
