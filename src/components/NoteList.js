import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNotesAsync } from "../redux/notes/notesServices";

const NoteList = () => {
  const items = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotesAsync());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default NoteList;
