import classes from './styles.module.css';

export default function Header({
  totalPages,
  currentPage,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
}) {
  return (
    <div className={classes.pagination}>
      <button disabled={currentPage <= 1} onClick={handlePreviousPage} className={classes.arrow}>
        {'<'}
      </button>
      <div className={classes.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={classes.pageNumber}
              key={index}
              disabled={index + 1 === currentPage}>
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={classes.arrow}>
        {'>'}
      </button>
    </div>
  );
}
