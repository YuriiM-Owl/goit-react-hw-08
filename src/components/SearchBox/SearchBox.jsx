import { useDispatch, useSelector } from "react-redux";

import { selectNameFilter } from "../../redux/filters/selectors";
import { setNameFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name or number</label>
      <input
        className={css.input}
        type="text"
        id="search"
        value={filter}
        onChange={(e) => dispatch(setNameFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
