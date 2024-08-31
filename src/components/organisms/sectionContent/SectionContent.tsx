import { FieldRenderer } from "../fieldRenderer";

export const SectionContent = ({
  fields,
  item,
}: {
  fields: any[];
  item: any;
}) => (
  <div>
    {fields.map((field: any, j: number) => (
      <FieldRenderer key={`${field.field}-${j}`} field={field} item={item} />
    ))}
  </div>
);
