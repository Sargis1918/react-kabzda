

import React from "react";
import "./Field.css";

export const PostTextarea = ({ input, meta, ...props }) => {
  
  return (
    <div className="textarea-wrapper">
      {meta.touched && meta.error  ? (
        <textarea {...input} {...props} className="textarea-text" />
      ) : (
        <textarea {...input} {...props} />
      )}
      {meta.touched && meta.error && (
        <span className="error-message">{meta.error}</span>
      )}
    </div>
  );
};

export const DialogsTextarea = ({ input, meta, ...props }) => {
  return (
    <div className="input-wrapper">
      {meta.touched && meta.error ? (
        <input {...input} {...props} className="input-text" />
      ) : (
        <input {...input} {...props} />
      )}
      {meta.touched && meta.error && (
        <span className="error-message">{meta.error}</span>
      )}
    </div>
  );
};

export const LoginTextarea = ({ input, meta, ...props }) => {
  return (
    <div className="login_wrapper">
      {meta.touched && meta.error ? (
        <div className="login_input_validation">
          <input {...input} {...props} className="login_1" />
        </div>
      ) : (
        <input {...input} {...props} />
      )}
      {meta.touched && meta.error && (
        <span className="login_error">{meta.error}</span>
      )}
    </div>
  );
};
