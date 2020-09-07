import React from "react";
const Form = (props) => {
  let { handleSubmit } = props;
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex justify-content-between">
          <input
            type="text"
            className="form-control mr-2 "
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            name="city"
            placeholder="City..."
            required
          />
          <input
            type="text"
            className="form-control ml-2"
            name="country"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Country..."
            required
          />
        </div>

        <button type="submit" className="btn  btn-block mt-3">
          Get Weather
        </button>
      </form>
    </div>
  );
};
export default Form;
