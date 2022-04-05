import React, { useState } from "react";
import { SearchPanel } from "react-search-panel";

const Search = () => {
  const choices = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
  ];
  const [input, setInput] = React.useState("");
  const [selectedChoices, setSelectedChoices] = useState(choices);
  return (
    <SearchPanel
      choices={choices}
      onChange={(event) => setInput(event.target.value)}
      onSelectionChange={setSelectedChoices}
      placeholder="Search"
      selectedChoices={selectedChoices}
      value={input}
    />
  );
};
export default Search;
