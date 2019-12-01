import React, { useEffect, useState } from "react";
import Loading from "../../configs/routes/Loading";

export const withStorage = Component => props => {
  const [ls, setLs] = useState(undefined);

  useEffect(() => {
    if (!localStorage) {
      throw Error("Local Storage not accessable");
    } else {
      setLs(localStorage);
    }
  }, []);

  return ls ? <Component ls={ls} {...props} /> : <Loading />;
};
