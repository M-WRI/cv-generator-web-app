import { Text } from "../../atoms";

export const GroupRenderer = ({ field, item }: { field: any; item: any }) => (
  <div
    className={`border-b-2 border-black-500 grid grid-cols-2 ${
      field.style || ""
    }`}
  >
    {field.fields.map((subField: any, k: number) => (
      <div
        key={`${subField.field}-${k}`}
        className={`p-4 ${subField.style || ""}`}
      >
        {subField.render ? (
          subField.render(item[subField.field])
        ) : (
          <Text translationKey={item[subField.field]} />
        )}
      </div>
    ))}
  </div>
);
