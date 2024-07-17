import { useNavigate } from "react-router-dom";
import { Headline } from "../../atoms";
import { CVListResponse, useGetCvs } from "../../../services";
import styles from "./cvAccordionContent.module.css";

export const CVAccordionContent = () => {
  const { CvList } = useGetCvs();
  const navigate = useNavigate();

  return (
    <div className="content">
      <ul>
        {CvList?.map((cv: CVListResponse) => (
          <div
            key={cv.id}
            className={styles.cvListItem}
            onClick={() => navigate(`cv/${cv.id}`)}
          >
            <Headline level={5} className={styles.cvListItemTitle}>
              {cv.title}
            </Headline>
          </div>
        ))}
      </ul>
    </div>
  );
};
