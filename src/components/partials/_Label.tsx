import { FC } from "react";
import { ILabelProps } from "../../interfaces/props/ILabelProps";

const Label: FC<ILabelProps> = (props) => {
  const { label, value } = props;

  return (
    <div className="label">
      <h6>{label}</h6>
      <h6>{value}</h6>
    </div>
  );
};

export default Label;
