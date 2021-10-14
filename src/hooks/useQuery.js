import { useLocation } from "react-router-dom";
const Usequery = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

export default Usequery;
