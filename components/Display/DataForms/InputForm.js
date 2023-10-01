import classes from "./InputForm.module.css";

const InputForm = ({
  title,
  submitFunction,
  submitText,
  undoSubmitFunction,
  undoSubmitText,
  children,
}) => {
  return (
    <div className={classes.formBorder} data-step="1">
      <h3 className={classes.stepTitle}>{title}</h3>
      {children}
      <div className={classes.buttonRow}>
        <div className={classes.flexRow}>
          {undoSubmitFunction && (
            <form
              onSubmit={undoSubmitFunction}
              style={{ width: submitFunction ? "45%" : "100%" }}
            >
              <button className={classes.button}>{undoSubmitText}</button>
            </form>
          )}
          {submitFunction && (
            <form
              onSubmit={submitFunction}
              style={{ width: undoSubmitFunction ? "45%" : "100%" }}
            >
              <button className={classes.button}>{submitText}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputForm;
