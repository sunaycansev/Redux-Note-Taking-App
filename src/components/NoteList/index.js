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
import { filteredItems } from "../../redux/notes/notesSlice";
const NoteList = () => {
  const items = useSelector(filteredItems);
  useEffect(() => {
    console.log(items);
  }, [items]);
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
              className={`col d-flex justify-content-center align-items-center   border border-1 mb-3 rounded rounded-3   mx-5  bg-${item.color}`}
            >
              <div className={`card border-0 bg-${item.color}`}>
                <div className={`card-body bg-${item.color}`}>
                  <p
                    className={` text-center card-text fs-4 font-monospace bg-${item.color}`}
                  >
                    {item.title}
                  </p>
                </div>
                <div className={`card-footer border-0 bg-${item.color}`}>
                  <div className="delete border border-1 d-flex flex-column">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className=" top-0 end-0 btn btn-sm btn-outline-dark"
                    >
                      <FiX className="fs-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default NoteList;

// TODO => single note çekilip modal ile default valular gösterilecek ve kişi orada değiiklik yaptıgında update atabilecek
// TODO => stil düzenlemeleri yapılacak
