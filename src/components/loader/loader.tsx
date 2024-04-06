import { RiLoader4Line } from "react-icons/ri";
import "./loader.scss";
export const Loader = () => {
  return (
    <div className="loader-container">
      <RiLoader4Line size={40} className="loader" />
    </div>
  );
};
