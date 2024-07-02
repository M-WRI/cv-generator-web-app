import { useNavigate } from "react-router-dom";
import { useGetCv } from "../../../hooks";
import { Headline } from "../../atoms";
import "./cvAccordionContent.styles.css";

export const CVAccordionContent = () => {
  const { CvList } = useGetCv();
  const navigate = useNavigate();

  return (
    <div className="content">
      <ul>
        {CvList?.data.map((cv: any) => (
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
