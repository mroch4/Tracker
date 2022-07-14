import { ITrackpoint } from "../ITrackpoint";

export interface IContextProps {
  trackpoints: ITrackpoint[];
  updateTrackpoints: (trackpoints: ITrackpoint[]) => void;
}
