import "./_Form.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postNotesAsync } from "../../redux/notes/notesServices";

const Form = () => {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("success");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("form.js/ color state : ", color);
  }, [color]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form.js / value", value);
    if (!value) {
      return;
    }
    await dispatch(postNotesAsync({ title: value, color: color }));
    setValue("");
  };
  return (
    <div className=" container d-flex justify-content-center align-items-center ">
      <form onSubmit={handleSubmit}>
        <div
          className="my-3 container position-relative my-5"
          id="textarea-div"
        >
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={10}
            cols={75}
            id="textarea"
            placeholder="Enter your note here..."
          />

          <div className="position-absolute  start-0 d-flex justify-content-center align-items-center ">
            <div
              className="rounded-circle bg-success color-btn me-3 border-0"
              onClick={(e) => setColor("success")}
            ></div>
            <div
              className="rounded-circle bg-danger color-btn me-3 border-0"
              onClick={(e) => setColor("danger")}
            ></div>
            <div
              className="rounded-circle bg-warning color-btn me-3 border-0"
              onClick={(e) => setColor("warning")}
            ></div>
            <div
              className="rounded-circle bg-info color-btn border-0"
              onClick={(e) => setColor("info")}
            ></div>
          </div>
          <button
            type="submit"
            className="btn btn-success rounded-pill px-5 add-button position-absolute bottom-5 start-5"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
