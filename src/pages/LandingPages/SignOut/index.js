import React from "react";
import { useNavigate } from "react-router-dom";

function index() {
  const navigate = useNavigate();
  React.useEffect = () => {
    localStorage.remove("user");
    navigate("", { replace: true });
  };

  return null;
}

export default index;
