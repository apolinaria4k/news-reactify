import classes from './styles.module.css';
import Categories from '../Categories/Categories';
import { getCategories } from '../../API/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Search from '../search/Search';
import Slider from '../Slider/Slider';

export default function NewsFilters({ filters, changeFilter }) {
  const { data: dataCategories } = useFetch(getCategories);

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
