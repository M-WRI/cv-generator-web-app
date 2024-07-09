import { useNavigate } from "react-router-dom";
import { Headline } from "../../atoms";
import { CVListResponse, useGetCvs } from "../../../services";
import "./cvAccordionContent.styles.css";

export const CVAccordionContent = () => {
  const { CvList } = useGetCvs();
  const navigate = useNavigate();

  return (
    <div className="content">
      <ul>
        {CvList?.map((cv: CVListResponse) => (
          <div
            key={cv.id}
            className="cv-list-item"
            onClick={() => navigate(`cv/${cv.id}`)}
          >
            <Headline level={5} className="cv-list-item-title">
              {cv.title}
            </Headline>
          </div>
        ))}
      </ul>
    </div>
  );
};
