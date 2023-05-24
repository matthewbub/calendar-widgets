import React, { FC, useState } from 'react';

interface YearSelectorProps {
  startYear: number;
  endYear: number;
}

const YearSelector: FC<YearSelectorProps> = ({ startYear = 1900, endYear = 2100 }) => {
  const yearsPerPage = 9;
  const totalPages = Math.ceil((endYear - startYear + 1) / yearsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const getPageYears = () => {
    const startIndex = (currentPage - 1) * yearsPerPage;
    return Array.from({ length: yearsPerPage }, (_, index) => startYear + startIndex + index);
  };

  return (
    <div>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <div>
        {getPageYears().map((year) => (
          <div key={year}>{year}</div>
        ))}
      </div>
    </div>
  );
};

export default YearSelector;
