import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import './index.css';

const FinalAccordian = () => {
  const [questions,setQuestions] = useState(data);
  return (<main>

    <div className="container">
      <h3>Question and Answer About Login</h3>
      <section className="info">
        {
          questions.map((question)=>{
            return <SingleQuestion key={question.id} {...question}/>
          })
        }
      </section>
    </div>
  </main>
  )
}

export default FinalAccordian;