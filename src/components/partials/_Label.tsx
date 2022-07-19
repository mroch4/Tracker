import { FC } from "react";
import { ILabel } from "../interfaces/ILabel";

const Label: FC<ILabel> = (props) => {
  const { label, value } = props;

  return (
    <div className="label">
      <h6>{label}</h6>
      <h6>{value}</h6>
    </div>
  );
};

export default Label;
