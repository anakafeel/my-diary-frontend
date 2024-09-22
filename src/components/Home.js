import React from "react";
import Notes from "./Notes";


const Home = (props) => {
  const {showAlert }= props /* destructuring */
  return (
    <div>
      <Notes showAlert={showAlert}/>
    </div>
  );
};

export default Home;