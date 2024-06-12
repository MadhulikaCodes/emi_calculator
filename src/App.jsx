import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    principal: "",
    interest: "",
    year: "",
  });
  const [emi, setEmi] = useState(undefined);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setEmi(
      (formData.principal * formData.interest * (1 + formData.interest)) ^
        (formData.year / ((1 + formData.interest) ^ (formData.year - 1)))
    );
  };

  return (
    <>
      <div className="container">
        <span>EMI Calculator</span>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <p>Principal :</p>
            <input
              name="principal"
              value={formData.principal}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <p>Interest :</p>
            <input
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <p>Year :</p>
            <input name="year" value={formData.rate} onChange={handleChange} />
          </div>
          <button type="submit">Calculate</button>
        </form>
        {emi && <p>{`Your emi will be ${emi}`}</p>}
      </div>
    </>
  );
};

export default App;
