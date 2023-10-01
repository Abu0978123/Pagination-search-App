import React from "react";
import { useGlobalContext } from "../context/Context";
import "./Pagination.css";
export default function Pagination() {
  const { page, nbPages, PaginationPre, PaginationNext } = useGlobalContext();
  return (
    <div>
      <div className="pagination-btn">
        <button onClick={PaginationPre}>PRE</button>
        <button onClick={PaginationNext}>NEXT</button>
      </div>
      <div className="pages">
        {page + 1} of {nbPages}
      </div>
    </div>
  );
}
