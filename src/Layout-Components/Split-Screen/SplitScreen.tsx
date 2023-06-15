import React from "react";

type SplitScreenProps = {
  children: React.ReactNode;
  leftColor: string;
  rightColor: string;
};

const SplitScreen: React.FC<SplitScreenProps> = ({
  children,
  leftColor,
  rightColor,
}) => {
  const [left, right] = React.Children.toArray(children);

  return (
    <div className="flex">
      <div className={`${leftColor} flex-1`}>{left}</div>
      <div className={`${rightColor} flex-1`}>{right}</div>
    </div>
  );
};

export default SplitScreen;
