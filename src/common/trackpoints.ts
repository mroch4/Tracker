import { ITrackpoint } from "./../interfaces/ITrackpoint";
import { v4 as uuid } from "uuid";

const day = new Date().getDate();

// export const trackpointsDatabase: ITrackpoint[] = [
//   {
//     id: uuid(),
//     timeStamp: new Date(2022, 6, day, 6, 0, 0),
//     distance: 0,
//   },
//   {
//     id: uuid(),
//     timeStamp: new Date(2022, 6, day, 7, 0, 0),
//     distance: 60,
//   },
//   {
//     id: uuid(),
//     timeStamp: new Date(2022, 6, day, 9, 0, 0),
//     distance: 240,
//   },
// ];

export const trackpointsDatabase: ITrackpoint[] = [
  {
    id: uuid(),
    timeStamp: new Date(2022, 6, day, 7, 0, 0),
    distance: 0,
  },
  {
    id: uuid(),
    timeStamp: new Date(2022, 6, day, 7, 25, 0),
    distance: 11.3,
  },
  {
    id: uuid(),
    timeStamp: new Date(2022, 6, day, 10, 5, 0),
    distance: 301.3,
  },
  {
    id: uuid(),
    timeStamp: new Date(2022, 6, day, 10, 30, 0),
    distance: 336.5,
  },
  {
    id: uuid(),
    timeStamp: new Date(2022, 6, day, 11, 42, 0),
    distance: 475.7,
  },
  {
    id: uuid(),
    timeStamp: new Date(2022, 6, day, 12, 36, 0),
    distance: 578.5,
  },
  {
    id: uuid(),
    timeStamp: new Date(2022, 6, day, 12, 48, 0),
    distance: 592,
  },
];
