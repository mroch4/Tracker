import { ILabels } from "../labels/interfaces/ILabels";
import { ITrackpoint } from "../interfaces/ITrackpoint";

export interface IContextProps {
  trackpoints: ITrackpoint[];
  updateTrackpoints: (trackpoints: ITrackpoint[]) => void;
  intl: string;
  changeIntl: (countryCode: string) => void;
  labels: ILabels;
}
