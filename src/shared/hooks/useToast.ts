import { useCallback, useMemo } from "react";
import { reduce, keys } from "rambda";
import { useToasts, AppearanceTypes } from "react-toast-notifications";

const TOAST_TYPES: Record<AppearanceTypes, AppearanceTypes> = {
  error: "error",
  warning: "warning",
  info: "info",
  success: "success",
};

export function useToast() {
  const { addToast } = useToasts();

  const showToast = useCallback(
    (type: AppearanceTypes, content: string, dismiss: boolean) => {
      addToast(content, { appearance: type, autoDismiss: dismiss });
    },
    [addToast]
  );

  const toastActions = useMemo(
    () =>
      reduce(
        (acc, key) => {
          acc[key] = (content: string, dismiss = true) =>
            showToast(key, content, dismiss);
          return acc;
        },
        {} as Record<AppearanceTypes, (c: string, d?: boolean) => void>,
        keys(TOAST_TYPES)
      ),
    [showToast]
  );

  return toastActions;
}
