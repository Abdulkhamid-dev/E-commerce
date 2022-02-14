import React, { useState } from "react";
import { Pagination } from "antd";
import { StyledPagination } from "./pagination.style";

function Pagination() {
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    setCurrent(page);
  };
  return (
    <StyledPagination>
      <Pagination current={current} onChange={onChange} total={50} />
    </StyledPagination>
  );
}

export default Pagination;
