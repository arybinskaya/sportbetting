import { Dispatch, SetStateAction } from "react";
import { Coefficient } from "../data";

type TypeProps = {
  label: string;
  data: Coefficient;
  isSelected: boolean;
  onSelect: Dispatch<SetStateAction<Coefficient | null>>;
};

const style = "p-3 rounded-md w-full";

export const ChoiceButton = ({
  label,
  data,
  isSelected,
  onSelect,
}: TypeProps) => {
  const onChoose = () => onSelect(isSelected ? null : data);

  return (
    <div
      className={isSelected ? `${style} bg-green-400` : `${style} bg-slate-300`}
    >
      <button onClick={onChoose} className="w-full flex justify-between">
        <span>{label}</span>
        <span>{data.value}</span>
      </button>
    </div>
  );
};
