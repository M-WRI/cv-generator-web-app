import { useNavigate } from "react-router-dom";
import { Headline } from "../../atoms";
import { CVListResponse, useDeleteCv, useGetCvs } from "../../../services";
import { DeleteButton } from "../../molecules";
import { useModal } from "../../../hooks";

export const CVAccordionContent = () => {
  const { CvList, refetch: refetchCvList } = useGetCvs();

  return (
    <div>
      <ul>
        {CvList?.map((cv: CVListResponse) => (
          <CvAccordionListItem
            key={cv.id}
            cv={cv}
            refetchCvList={refetchCvList}
          />
        ))}
      </ul>
    </div>
  );
};

const CvAccordionListItem = ({
  cv,
  refetchCvList,
}: {
  cv: CVListResponse;
  refetchCvList: () => void;
}) => {
  const navigate = useNavigate();
  const {
    modalId,
    openModal,
    isModalOpen,
    ConfirmModal,
    MODAL_ID,
    closeModal,
  } = useModal();

  const { deleteCv } = useDeleteCv({
    options: {
      onSuccess: () => {
        refetchCvList();
      },
    },
  });

  return (
    <>
      {modalId && isModalOpen(modalId) && (
        <ConfirmModal
          action={() => deleteCv(cv.id)}
          closeModal={closeModal}
          modalId={modalId}
        />
      )}
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
        <DeleteButton
          id={cv.id}
          action={deleteCv}
          testAction={() => openModal(MODAL_ID.deleteCvModal)}
        />
      </li>
    </>
  );
};
