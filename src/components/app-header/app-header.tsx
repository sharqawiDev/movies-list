import { Input } from "../input";
import { RiMovie2Fill } from "react-icons/ri";

import "./app-header.scss";

type Props = {
  searchText: string;
  setSearchText: (text: string) => void;
};
export const AppHeader = ({ searchText, setSearchText }: Props) => {
  return (
    <div className="app-header">
      <RiMovie2Fill size={40} />
      <h2 className="app-header__title">Movies App</h2>
      <Input
        type="text"
        placeholder="Search movies..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
    </div>
  );
};
