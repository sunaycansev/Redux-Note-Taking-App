import "./_Filter.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchValue, filteredItems } from "../../redux/notes/notesSlice";
import { BiSearch } from "react-icons/bi";

const Filter = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  console.log("filteredItem in filter component", filteredItems);
  useEffect(() => {
    dispatch(changeSearchValue(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className="container d-flex justify-content-center my-5 input-group">
      <div className="form-outline position-relative">
        <input
          placeholder="Search"
          className="form-control pe-5 py-2"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="icon position-absolute top-50 end-0 translate-middle">
          <BiSearch className="fs-4" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
