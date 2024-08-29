import { useNavigate } from "react-router-dom";
import { Headline } from "../../atoms";
import { CVListResponse, useDeleteCv, useGetCvs } from "../../../services";
import { DeleteButton } from "../../molecules";

export const CVAccordionContent = () => {
  const { CvList, refetch: refetchCvList } = useGetCvs();
  const { deleteCv } = useDeleteCv({
    options: {
      onSuccess: () => {
        refetchCvList();
      },
    },
  });

  const navigate = useNavigate();

  return (
    <div>
      <ul>
        {CvList?.map((cv: CVListResponse) => (
          <li
            key={cv.id}
            className="flex items-center justify-between border-b-2 border-black-500"
          >
            <div
              onClick={() => navigate(`cv/${cv.id}`)}
              className="px-4 py-2 cursor-pointer hover:bg-primary-100 flex-1"
            >
              <Headline level={5} className="font-normal" type="black">
                {cv.title}
              </Headline>
            </div>
            <DeleteButton id={cv.id} action={deleteCv} />
          </li>
        ))}
      </ul>
    </div>
  );
};
