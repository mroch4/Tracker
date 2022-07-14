import { ITrackpoint } from "./../interfaces/ITrackpoint";
import { v4 as uuid } from "uuid";

export const trackpointsDatabase: ITrackpoint[] = [
  {
    id: uuid(),
    timeStamp: "2019-06-13T07:00:00.000+02:00",
    distance: 0,
  },
  {
    id: uuid(),
    timeStamp: "2019-06-13T07:25:00.000+02:00",
    distance: 11.3,
  },
  {
    id: uuid(),
    timeStamp: "2019-06-13T10:05:00.000+02:00",
    distance: 301.3,
  },
  {
    id: uuid(),
    timeStamp: "2019-06-13T10:30:00.000+02:00",
    distance: 336.5,
  },
  {
    id: uuid(),
    timeStamp: "2019-06-13T11:42:00.000+02:00",
    distance: 475.7,
  },
  {
    id: uuid(),
    timeStamp: "2019-06-13T12:36:00.000+02:00",
    distance: 578.5,
  },
  {
    id: uuid(),
    timeStamp: "2019-06-13T12:48:00.000+02:00",
    distance: 592,
  },
];
