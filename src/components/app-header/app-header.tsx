import { Input } from "../input";
import { RiMovie2Fill } from "react-icons/ri";

import "./app-header.scss";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
export const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const [searchText, setSearchText] = useState(params.get("query") || "");
  const isHomePage = location.pathname === "/movies";

  useEffect(() => {
    if (searchText?.length) setParams({ query: searchText });
    else setParams({});
  }, [searchText, setParams]);

  return (
    <div className="app-header">
      <h2 className="app-header__title" onClick={() => navigate("/movies")}>
        <RiMovie2Fill size={40} />
        Movies App
      </h2>
      {isHomePage && (
        <Input
          type="text"
          placeholder="Search movies..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      )}
    </div>
  );
};
