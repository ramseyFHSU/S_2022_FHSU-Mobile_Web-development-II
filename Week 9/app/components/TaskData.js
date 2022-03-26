import colors from "./shared/config/colors";

const TaskData = [
  {
    id: 1,
    title: "Office Work",
    description: "Have to setup Github",
    image: require("../assets/11.jpg"),
  },
  {
    id: 2,
    title: "Garden Work",
    description: "Have to dirt bed",
    image: require("../assets/11.jpg"),
  },
  {
    id: 3,
    title: "Car Repair",
    description: "Have to setup the battery",
    image: require("../assets/11.jpg"),
  },
  {
    id: 4,
    title: "Project Report",
    description: "Submit to manager",
    image: require("../assets/11.jpg"),
  },
];

export const taskProperties = [
  {
    key: "1",
    title: "Priority",
    icon: {
      name: "exclamation",
      backgroundColor: colors.secondary,
    },
  },
  {
    key: "2",
    title: "Status",
    icon: {
      name: "equalizer-outline",
      backgroundColor: colors.secondary,
    },
  },
  {
    key: "3",
    title: "Date",
    icon: {
      name: "calendar-month",
      backgroundColor: colors.secondary,
    },
  },
  {
    key: "4",
    title: "Location",
    icon: {
      name: "google-maps",
      backgroundColor: colors.secondary,
    },
  },
  {
    key: "5",
    title: "Notes",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.secondary,
    },
  },
];

export const categories = [
  { label: "Project 1", value: 1 },
  { label: "Project 2", value: 2 },
  { label: "Project 3", value: 3 },
];

export default TaskData;
