import React from 'react'

function MovieProp(props) {
  return <div>
    <strong>Name:</strong> {props.title}  <strong>Year:</strong> {props.year}
  </div> 
}

export default MovieProp