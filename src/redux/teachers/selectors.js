import { useSelector } from "react-redux";

export const selectTeacherList = (state) => state.teachers.teachersList;
export const selectIsLoading = (state) => state.teachers.isLoading;
export const selectError = (state) => state.teachers.error;
