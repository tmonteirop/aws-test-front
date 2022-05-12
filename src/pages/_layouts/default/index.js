import PropTypes from "prop-types";

import { TopBar } from "../../../component/TopBar";

export function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <TopBar />
      <div className="container">{children}</div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
