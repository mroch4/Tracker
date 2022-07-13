import { FC } from "react";

interface ILabelProps {
  desc: string;
  value: string;
}

const Label: FC<ILabelProps> = (props) => {
  const { desc, value } = props;

  return (
    <div className="label">
      <h6>{desc}</h6>
      <h6>{value}</h6>
    </div>
  );
};

export default Label;
