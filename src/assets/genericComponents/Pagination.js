import React, { useState } from "react";
import ReactPaginate from "react-paginate";
export function PaginationComponent(props) {
  const [active, setActive] = useState(props && props.page ? props.page : 0);
  const handlePageClick = (data) => {
    let selected = data.selected;
    props.pageChange(selected + 1);
    setActive(selected);
  };
  return (
    <div className="pagination-modify">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        forcePage={active}
        // breakClassName={'break-me'}
        breakClassName="page-item"
        pageCount={props.totalNumber}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
