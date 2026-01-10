import { NextPage } from "next";

interface Props {
  color ?: string;
  colorName ?: string;
}

const SolidBgCard: NextPage<Props> = ({ color, colorName }: Props) => {
  
  return (
    <div className="flex flex-col items-center w-fit gap-1">
      <div
        style={{ backgroundColor: color }}
        className={`w-75 px-2 py-4 max-w-[90%] rounded-sm hover:ring-1 ring-white cursor-pointer select-none flex justify-center items-center transition-all duration-300 h-30`}
      ></div>
      <p className="font-medium text-sm">{colorName}</p>
    </div>
  );
};

export default SolidBgCard;
