import { useDelete, useFetch } from "../../api/dataProvider";
import { TDeleteOptions } from "../../types";
import { CVDetailedResponse, CVListResponse } from "./types";

export const useGetCvs = () => {
  const { data: CvList, ...rest } = useFetch<CVListResponse[]>({
    url: "http://localhost:8000/api/cvs",
    queryKey: ["cvList"],
  });

  return { CvList, ...rest };
};

export const useGetCvDetails = ({ id }: { id: string }) => {
  const { data: CvDetails, ...rest } = useFetch<CVDetailedResponse>({
    url: `http://localhost:8000/api/cvs/${id}`,
    queryKey: ["cvDetails", id],
    options: {
      enabled: false,
    },
  });

  return { CvDetails, ...rest };
};

export const useDeleteCv = ({ options }: { options?: TDeleteOptions }) => {
  const { mutate, ...rest } = useDelete({
    url: `http://localhost:8000/api/cvs/:id`,
    options,
  });

  const deleteCv = (id: string | number) => {
    mutate({ id });
  };

  return { deleteCv, ...rest };
};
