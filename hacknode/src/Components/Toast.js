import React from "react";

const Toast = () => {
  return (
    <>
      <div aria-live="polite" aria-atomic="true" className="position-relative">
        <h2>Toast</h2>
        <div className="toast-container position-absolute top-0 end-0 p-3">
          <div
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <img src="..." className="rounded me-2" alt="..." />
              <strong className="me-auto">Bootstrap</strong>
              <small className="text-muted">just now</small>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">See? Just like this.</div>
          </div>

          <div
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <img src="..." className="rounded me-2" alt="..." />
              <strong className="me-auto">Bootstrap</strong>
              <small className="text-muted">2 seconds ago</small>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              Heads up, toasts will stack automatically
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toast;
