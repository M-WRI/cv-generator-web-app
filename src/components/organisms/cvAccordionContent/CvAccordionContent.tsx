import { useNavigate } from "react-router-dom";
import { Headline } from "../../atoms";
import { CVListResponse, useGetCvs } from "../../../services";

export const CVAccordionContent = () => {
  const { CvList } = useGetCvs();
  const navigate = useNavigate();

  return (
    <div>
      <ul>
        {CvList?.map((cv: CVListResponse) => (
          <div key={cv.id} onClick={() => navigate(`cv/${cv.id}`)}>
            <Headline level={5}>{cv.title}</Headline>
          </div>
        ))}
      </ul>
    </div>
  );
};
