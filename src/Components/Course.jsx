import React from 'react'

const Course = () => {
  return (
    <>
    
    <div style={{display:'flex',justifyContent:'center'}}>
      <div>
         <h2>Full Time Courses</h2>
         <ol>
            <li>Full Stack Web Development</li>
            <ul>
                <li>Eligibility: 18-28 yrs</li>
                <li>Duration: 30 weeks</li>

            </ul>
         </ol>
       
         <h2>Part Time Courses</h2>
         <ol>
            <li>Full Stack Web Development</li>
            <ul>
                <li>Eligibility: 18-28 yrs</li>
                <li>Duration: 30 weeks</li>

            </ul>

            <li>Data Analytics</li>
            <ul>
                <li>Eligibility: 18-28 yrs</li>
                <li>Duration: 30 weeks</li>

            </ul>
         </ol>
         
       </div> 
       </div>  
    </>
  )
}

export default Course