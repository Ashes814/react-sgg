import React, { useState } from "react";
import { Fragment } from "react";

/* 
 
  不希望父容器在网页中产生多余的结构时，可以使用Fragment

*/

function App() {
  return (
    <Fragment>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Fragment>
  );
}

export default App;
