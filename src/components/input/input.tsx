import { ChangeEvent } from "react";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";

import "./input.scss";

interface Props {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, value, onChange }: Props) => {
  const clearInput = () => {
    onChange({ target: { value: "" } } as ChangeEvent<HTMLInputElement>);
  };
  return (
    <div className="search-input">
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {value?.length ? (
        <IoCloseOutline className="close-icon" onClick={clearInput} />
      ) : (
        <IoSearchOutline />
      )}
    </div>
  );
};
