import { Text } from "../../atoms";

export const SectionTitle = ({ title }: { title: string }) => (
  <div className="bg-primary-100 p-4">
    <Text translationKey={title} className="text-black-500 font-bold" />
  </div>
);
