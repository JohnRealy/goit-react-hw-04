import { useState } from "react";
import css from "./App.module.css";
import SerchBar from "../SearchBar/SearchBar";
import api from "../api";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    api({ inputValue });
  };
  return (
    <div>
      <SerchBar onSubmit={(onSubmit, inputValue, setInputValue)} />
    </div>
  );
}
