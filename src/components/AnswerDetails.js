import React from 'react';
import {Field} from './Field';

function AnswerDetails (props) {
  return (
    <div>
      <p>{props.body}</p>
      <p>By {props.author_full_name}</p>
      <Field name="Created At" value={props.created_at} />
    </div>
  );
}

export {AnswerDetails};
