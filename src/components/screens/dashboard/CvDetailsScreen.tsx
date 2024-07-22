import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../../atoms";
import { useGetCvDetails } from "../../../services";

export const CvDetailsScreen = () => {
  const { id } = useParams<{ id: string }>();
  const {
    CvDetails,
    refetch,
    isFetching: CvDetailsIsFetching,
  } = useGetCvDetails({ id: id! });

  console.log(CvDetails, "<------ cv details");

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
        <div>
          <h1>this is cv details</h1>
        </div>
      )}
    </>
  );
};
