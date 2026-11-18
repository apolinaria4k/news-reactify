import type { IFilters } from '../../interfaces';
import Categories from '../Categories/Categories';
import Search from '../search/Search';
import Slider from '../Slider/Slider';
import { useAppDispatch } from '../store';
import { useGetCategoriesQuery } from '../store/services/newsApi';
import { setFilters } from '../store/slices/newsSlice';
import classes from './styles.module.css';

interface Props {
  filters: IFilters;
}

export default function NewsFilters({ filters }: Props) {
  const dispatch = useAppDispatch();
  const { data: dataCategories } = useGetCategoriesQuery(null);

  return (
    <div className={classes.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => dispatch(setFilters({ key: 'keywords', value: keywords }))}
      />
    </div>
  );
}
