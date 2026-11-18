import { TOTAL_PAGES } from '../../constants/constants';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../newsList/NewsList';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import { useAppDispatch, useAppSelector } from '../store';
import { useGetNewsQuery } from '../store/services/newsApi';
import { setFilters } from '../store/slices/newsSlice';
import classes from './styles.module.css';

export const NewsByFilters = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(setFilters({ key: 'page_number', value: filters.page_number + 1 }));
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(setFilters({ key: 'page_number', value: filters.page_number - 1 }));
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }));
  };

  return (
    <section className={classes.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top={true}
        bottom={true}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}>
        <NewsList isLoading={isLoading} news={news}></NewsList>
      </PaginationWrapper>
    </section>
  );
};
