import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Detail() {
  const [search, setSearch] = useSearchParams();
  const id = search.get("id");
  const title = search.get("title");
  const content = search.get("content");
  return (
    <div>
      <button onClick={() => setSearch("id=008&title=haha&content=xixi")}>
        update
      </button>
      <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{content}</li>
      </ul>
    </div>
  );
}
