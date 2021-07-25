import React, { useState } from 'react';
import data from './ques';
import './Me.css'
import SingleQuestion from './Question';
function Me2() {

  const [questions, setQuestions] = useState(data);
  return <main>
    <div className="container">
      <h3>About Me </h3>
      <section className="info">
        {
          questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })
        }
      </section>
    </div>
    </main>;
}

export default Me2;
