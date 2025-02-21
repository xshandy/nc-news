import { useEffect } from "react";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, [1000]);
  }, []);
  return <h1>Sorry, page does not exist</h1>;
}

export default NotFound;
