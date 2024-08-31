import { Text } from "../../atoms";
import { ArrayRenderer } from "../arrayRenderer";
import { GroupRenderer } from "../groupRenderer";

export const FieldRenderer = ({ field, item }: { field: any; item: any }) => {
  if (field.field === "group" && field.fields) {
    return <GroupRenderer field={field} item={item} />;
  } else if (field.type === "array" && Array.isArray(item[field.field])) {
    return <ArrayRenderer field={field} items={item[field.field]} />;
  } else {
    return (
      <div className={`p-4 border-b-2 border-black-500 ${field.style || ""}`}>
        {field.render ? (
          field.render(item[field.field])
        ) : (
          <Text translationKey={item[field.field]} />
        )}
      </div>
    );
  }
};
