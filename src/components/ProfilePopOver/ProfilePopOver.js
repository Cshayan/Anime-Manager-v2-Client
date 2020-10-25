import React from "react";
import PropTypes from "prop-types";
import Popover from "@material-ui/core/Popover";
import ProfilePopOverContent from "./ProfilePopOverContent";
import { useGetMe, useLogOut } from "../../custom-hooks/authHook";

const ProfilePopOver = (props) => {
  const { anchorEl, handleClose, open, id } = props;
  const { userDetails } = useGetMe();
  const { handleLogoutButtonClick } = useLogOut();

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <ProfilePopOverContent
        name={userDetails?.name}
        email={userDetails?.email}
        logOutButtonClick={handleLogoutButtonClick}
      />
    </Popover>
  );
};

ProfilePopOver.defaultProps = {
  id: undefined,
  anchorEl: null,
};

ProfilePopOver.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  anchorEl: PropTypes.object,
};

export default ProfilePopOver;
