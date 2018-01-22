import React from 'react';

function QuestionForm (props) {
  const {
    question = {},
    onSubmit = () => {},
    onChange = () => {}
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  const handleChange = name => event => {
    onChange({[name]: event.currentTarget.value});
  };

  return (
    <form
      className="QuestionForm"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="title">Title</label> <br />
        <input
          onChange={handleChange("title")}
          value={question.title}
          name="title"
          id="title"
        />
      </div>

      <div>
        <label htmlFor="body">Body</label> <br />
        <input
          onChange={handleChange("body")}
          value={question.body}
          name="body"
          id="body"
        />
      </div>

      <div>
        <input type="submit" value="Submit"/>
      </div>
    </form>
  );
}

export {QuestionForm}
