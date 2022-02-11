import React from 'react'
import {Pagination} from 'antd'
import { StyledPagination } from './pagination.style'

function Pagination() {
  return (
  <StyledPagination>
       <Pagination  defaultCurrent={1} total={50} />
  </StyledPagination>
  )
}

export default Pagination