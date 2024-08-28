import { Address } from "../../../services";
import { Text } from "../../atoms";

export const CvAddressDetails = ({ address }: { address?: Address }) => {
  return (
    <div className="grid">
      <div className="bg-primary-100 p-4">
        <Text translationKey={"CV.address.title"} className="text-black-500" />
      </div>
      <div className="p-4 border-b-2 border-black-500">
        <Text translationKey={address?.street} />
      </div>
      <div className="grid grid-cols-[3fr_1fr]">
        <div className="p-4 border-b-2 border-r-2 border-black-500">
          <Text translationKey={address?.zipCode} />
        </div>
        <div className="p-4 border-b-2 border-black-500">
          <Text translationKey={address?.city} />
        </div>
      </div>
      <div className="grid grid-cols-[1fr_3fr]">
        <div className="p-4 border-b-2 border-r-2 border-black-500">
          <Text translationKey={address?.state} />
        </div>
        <div className="p-4 border-b-2 border-black-500">
          <Text translationKey={address?.country} />
        </div>
      </div>
    </div>
  );
};
