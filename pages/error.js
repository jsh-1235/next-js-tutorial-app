import React from "react";

function Error({ statusCode }) {
  const style = {
    display: "flex",
    flexDirection: "rows",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontSize: "2rem",
    textTransform: "uppercase",
  };

  return <div style={style}>Status Code {statusCode}</div>;
}

Error.getInitialProps = ({ res, err }) => {
  console.log(res.statusCode);

  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
