import "./_Form.scss";
import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
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
          <button
            type="submit"
            className="btn btn-success rounded-pill px-5 add-button position-absolute bottom-5 end-5"
          >
            Add
          </button>
          <div className="position-absolute top-100 start-10">
            <button className="rounded-circle bg-success color-btn me-3 border-0"></button>
            <button className="rounded-circle bg-danger color-btn me-3 border-0"></button>
            <button className="rounded-circle bg-warning color-btn me-3 border-0"></button>
            <button className="rounded-circle bg-info color-btn border-0"></button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
