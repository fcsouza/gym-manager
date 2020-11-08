import React from 'react';
import { MdAdd, MdViewStream, MdViewModule } from 'react-icons/md';
import { Container } from './styles';

export default function Filter({ handleShowForm, options }) {
  return (
    <Container>
      {options && (
        <div>
          <MdViewStream size={30} color="#696a80" />
          <MdViewModule size={30} color="#cbced6" />
        </div>
      )}

      <button type="button">
        <MdAdd color="#696A80" size={25} onClick={handleShowForm} />
      </button>
    </Container>
  );
}
