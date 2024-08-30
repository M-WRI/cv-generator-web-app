import { useTranslation } from "react-i18next";
import { CONFIRMATION_MODAL_CONTENT } from "../../../constants";
import { Headline, Text } from "../../atoms";
import { Button } from "../../molecules";

export const ConfirmModal = ({
  action,
  closeModal,
  modalId,
}: {
  action: () => void;
  closeModal: () => void;
  modalId: string | number;
}) => {
  const { t } = useTranslation();
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center backdrop-blur-md bg-white/30 z-50">
      <div className="bg-white rounded-lg w-86 h-86 p-8 grid gap-4 shadow-lg">
        <div className="grid gap-2">
          <Headline level={3} type="primary">
            {t(CONFIRMATION_MODAL_CONTENT[modalId].title)}
          </Headline>
          <Text
            translationKey={CONFIRMATION_MODAL_CONTENT[modalId].description}
          />
        </div>
        <div className="flex gap-4">
          <Button action={action}>
            {t(CONFIRMATION_MODAL_CONTENT[modalId].confirm)}
          </Button>
          <Button action={closeModal}>
            {t(CONFIRMATION_MODAL_CONTENT[modalId].cancel)}
          </Button>
        </div>
      </div>
    </div>
  );
};
