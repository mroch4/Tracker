import { ILabels } from "../ILabels";
import { ITrackpoint } from "../ITrackpoint";

export interface IContextProps {
  trackpoints: ITrackpoint[];
  updateTrackpoints: (trackpoints: ITrackpoint[]) => void;
  intl: string;
  changeIntl: (countryCode: string) => void;
  labels: ILabels;
}
