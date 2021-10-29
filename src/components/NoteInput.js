import { useState } from "react";

const NoteInput = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        <div className="my-3" id="input-div">
          <input
            style={{
              width: 500,
              height: 200,
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            id="note"
            placeholder="Enter your note here..."
            className="bg-white border-1 border-danger"
          />
        </div>
      </form>
    </div>
  );
};

export default NoteInput;
