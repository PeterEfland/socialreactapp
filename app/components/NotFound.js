import React from "react";
import { Link } from "react-router-dom";
import Page from "./Page";

function NotFound() {
  return (
    <Page title="Not Found">
      <div className="text-center">
        <h2>
          Whoops! We cannot find that page.
          <p className="lead text-muted">
            You can always visit the <Link to="/">homepage</Link> to get a fresh start.
          </p>
        </h2>
      </div>
    </Page>
  );
}

export default NotFound;
