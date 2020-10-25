import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { snackBarClose } from "../actions/snackbarAction";

export const useSnackbar = () => {
  const dispatch = useDispatch();
  const isSnackBarOpen = useSelector((state) => state.snackBar.isSnackBarOpen);
  const snackBarMessage = useSelector(
    (state) => state.snackBar.snackBarMessage
  );
  const snackBarType = useSelector((state) => state.snackBar.snackBarType);

  useEffect(() => {
    dispatch(snackBarClose());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(snackBarClose());
  };

  return {
    isSnackBarOpen,
    snackBarMessage,
    snackBarType,
    handleClose,
  };
};
