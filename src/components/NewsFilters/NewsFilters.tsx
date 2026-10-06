import classes from './styles.module.css';
import Categories from '../Categories/Categories';
import { getCategories } from '../../API/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Search from '../search/Search';
import Slider from '../Slider/Slider';
import type { CategoriesApiResponse, IFilters } from '../../interfaces';

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | null | number) => void;
}

export default function NewsFilters({ filters, changeFilter }: Props) {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);

  return (
    <div className={classes.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            setSelectedCategory={(category) => changeFilter('category', category)}
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
    </div>
  );
}
