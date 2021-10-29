import "./_NoteList.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNotesAsync } from "../../redux/notes/notesServices";
import LoadingSpinner from "../LoadingSpinner";

const NoteList = () => {
  const items = useSelector((state) => state.notes.items);
  const isLoading = useSelector((state) => state.notes.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotesAsync());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className="container-lg my-5">
      <div className="row">
        {items.map((item) => (
          <div
            key={item.id}
            className="col bg-warning border border-1 d-flex justify-content-around align-items-center mx-5"
          >
            <p className="p-5 border-1 border border-danger ">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
// <ul>
//   {items.map((item) => (
//       <li key={item.id}>{item.title}</li>
//   ))}
// </ul>
export default NoteList;
