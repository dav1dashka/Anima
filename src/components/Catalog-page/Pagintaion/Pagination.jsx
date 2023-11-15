import ReactPaginate from 'react-paginate';
import { AiOutlineCaretRight } from 'react-icons/ai'
import { AiOutlineCaretLeft } from 'react-icons/ai'

import './Pagination.scss'

const Pagination = ({onChangePage}) => {
    return (
        <>
            <ReactPaginate
                className='pagination'
                breakLabel="..."
                nextLabel={<AiOutlineCaretRight />}
                onPageChange={(e) => onChangePage(e.selected + 1)}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                pageCount={12}
                previousLabel={<AiOutlineCaretLeft />}
                renderOnZeroPageCount={null}
            />
        </>
    )
}


export default Pagination;
