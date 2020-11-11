import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Container } from './styles';

export default function Pagination({
  prevPage,
  nextPage,
  numPagination,
  handlePagination,
  pagination,
}) {
  return (
    <Container>
      <ul>
        <li onClick={prevPage}>
          <MdKeyboardArrowLeft size={20} />
        </li>
        {numPagination.map(page => (
          <li
            className={pagination === page ? 'active' : ''}
            key={page}
            onClick={() => handlePagination(page)}
          >
            {page}
          </li>
        ))}
        <li onClick={nextPage}>
          <MdKeyboardArrowRight size={20} />
        </li>
      </ul>
    </Container>
  );
}
