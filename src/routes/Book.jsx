import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const Book = () => {
  useEffect(() => {}, []);

  console.log(useParams());

  return <div> book page, boook id: {useParams().id}</div>;
};

export default Book;
