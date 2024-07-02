import axios from "axios";
import { useQuery } from "react-query";
import Cookies from "js-cookie";

export const useGetCvDetails = ({ id }: { id: string }) => {
  const token = Cookies.get("token");

  const { data: CvDetails, ...rest } = useQuery(
    "cvDetails",
    () =>
      axios.get(`http://localhost:8000/api/cvs/${id ?? ""}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      enabled: false,
    }
  );

  return { CvDetails, ...rest };
};
