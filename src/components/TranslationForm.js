import React from 'react';
import { useState } from 'react';

  function TranslationForm({ addTranslation }) {

    const [Eng, setEng] = useState();
    const [Pl, setPl] = useState();
    const [date, setDate] = useState();

    const handleSubmit= (e) => {
      addTranslation([Eng, Pl, date])
      e.preventDefault();
    }
  
    return (
      <form className='form' onSubmit={e => { handleSubmit(e) }}>

<div className='form' >
   <label>ENG:</label>
        <br />
        <input 
        className='flex-container'
          name='ENG' 
          type='text'
          value={Eng}
          onChange={e => setEng(e.target.value)}
        />
        <br/>
        <label>PL:</label>
        <br />
        <input
        className='flex-container' 
          name='PL' 
          type='text' 
          value={Pl}
          onChange={e => setPl(e.target.value)}
        />
        <br />
        <label>Date:</label>
        <br />
        <input
        className='flex-container'
          name='date' 
          type='date'
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <br/>

        <button
        
        type='submit' 
        value='Add Log' 
        className='glowing-btn'
        >
         <span class='glowing-txt'>C<span class='faulty-letter'>L</span>ICK</span>
        </button>
</div>
      </form>
    )
  }

  export default TranslationForm;