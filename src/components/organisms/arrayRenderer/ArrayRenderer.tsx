import { FieldRenderer } from "../fieldRenderer";

export const ArrayRenderer = ({
  field,
  items,
}: {
  field: any;
  items: any[];
}) => (
  <div className={`${field.style || ""}`}>
    {items.map((nestedItem: any, nestedIndex: number) => (
      <div key={`${field.field}-${nestedIndex}`}>
        {field.fields.map((nestedField: any, nestedFieldIndex: number) => (
          <FieldRenderer
            key={`${nestedField.field}-${nestedFieldIndex}`}
            field={nestedField}
            item={nestedItem}
          />
        ))}
      </div>
    ))}
  </div>
);
