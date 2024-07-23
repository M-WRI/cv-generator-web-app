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
          <li
            key={cv.id}
            onClick={() => navigate(`cv/${cv.id}`)}
            className="px-4 py-2 cursor-pointer border-b-2 border-black-500 hover:bg-primary-100"
          >
            <Headline level={5} className="font-normal" type="black">
              {cv.title}
            </Headline>
          </li>
        ))}
      </ul>
    </div>
  );
};
