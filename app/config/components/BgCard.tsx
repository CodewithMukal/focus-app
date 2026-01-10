import { NextPage } from "next";

interface Props {
  bgLink : string;
}

const BgCard: NextPage<Props> = ({ bgLink }: Props) => {
  
  return (
    <div className="flex flex-col items-center w-fit gap-1">
      <div
        className={`w-75 max-w-[90%] rounded-sm hover:ring-1 ring-white cursor-pointer select-none flex justify-center items-center transition-all duration-300 h-30`}
      >
        {
            bgLink && <img src={bgLink} className="h-full w-full rounded-sm" alt="" />
        }
      </div>
    </div>
  );
};

export default BgCard;
