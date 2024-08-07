import { generateTranslationKey } from "../utils";

export const errorSerializer = <T>(
  error: any,
  setError: (location: keyof T, data: any) => void
) => {
  if (Array.isArray(error)) {
    error.forEach(
      (err: { errorCode: string; location: string; type: string }) => {
        const { type, errorCode, location } = err;
        const translationKey = generateTranslationKey(
          errorCode,
          location,
          type
        );
        setError(location as keyof T, {
          type: "manual",
          message: translationKey,
        });
      }
    );
  }
};
