
import React from 'react'

function TranslationChart(props) {
  return (
    <table className='table'>
      <thead> 
        <tr>
          <th>ENGLISH</th>
          <th>POLISH</th>
          <th>Date</th>
        </tr>
        </thead> 
            {props.translation.map((v, i) => {
        return <tr>
          <th>{v[0]}</th>
          <th>{v[1]}</th>
          <th>{v[2]}</th>
        </tr>
      })}
    </table>
  );
}

export default TranslationChart;