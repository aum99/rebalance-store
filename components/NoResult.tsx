import { FC } from "react";

interface NoResultProps {}

const NoResult: FC<NoResultProps> = ({}) => {
  return (
    <div className="flex items-center justify-center h-full w-full text-neutral-500">
      No results found.
    </div>
  );
};

export default NoResult;
