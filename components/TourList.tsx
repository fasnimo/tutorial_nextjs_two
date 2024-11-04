// import React from 'react'

async function TourList({tours, onClickHandler}) {
 
  return (
    <section>
      <h2>Test</h2>
        {tours.map((tour) => {
          
            return <h2 onClick={onClickHandler} key={tour.id}>{tour.name}</h2>
        })}
    </section>
  )
}

export default TourList