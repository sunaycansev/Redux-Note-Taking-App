import React from "react";
import "./_NoteList.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getNotesAsync,
  deleteNotesAsync,
} from "../../redux/notes/notesServices";
import LoadingSpinner from "../LoadingSpinner";
import { FiX } from "react-icons/fi";
const NoteList = () => {
  const items = useSelector((state) => state.notes.items);
  const isLoading = useSelector((state) => state.notes.isLoading);

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure ?")) {
      await dispatch(deleteNotesAsync(id));
    }
  };

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
          <React.Fragment key={item.id}>
            <div
              className={`col  border border-1 d-flex justify-content-around align-items-center mx-5 position-relative bg-${item.color}`}
            >
              <p className="p-5 border-1 border border-danger ">{item.title}</p>
              <button
                onClick={() => handleDelete(item.id)}
                className="position-absolute top-0 end-0 btn btn-sm"
              >
                <FiX className="display-6" />
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default NoteList;

// TODO => single note çekilip modal ile default valular gösterilecek ve kişi orada değiiklik yaptıgında update atabilecek
// TODO => filtered list oluşturuluacak bi filtremele search inputu içindeki değere göre yapılacak ve listeleme filteredList'e göre yapılacak
// TODO => stil düzenlemeleri yapılacak
