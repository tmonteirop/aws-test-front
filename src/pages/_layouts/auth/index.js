import React from "react";
import PropTypes from "prop-types";

export function AuthLayout({ children }) {
  return <>{children}</>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
