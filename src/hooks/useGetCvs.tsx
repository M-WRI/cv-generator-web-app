import axios from "axios";
import { useQuery } from "react-query";
import Cookies from "js-cookie";

export const useGetCv = () => {
  const token = Cookies.get("token");

  const { data: CvList, ...rest } = useQuery("cvList", () =>
    axios.get("http://localhost:8000/api/cvs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return { CvList, ...rest };
};
