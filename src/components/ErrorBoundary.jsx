import React, { useState, useEffect } from "react";

const ErrorBoundary = (props) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return props.children;
};

export default ErrorBoundary;
