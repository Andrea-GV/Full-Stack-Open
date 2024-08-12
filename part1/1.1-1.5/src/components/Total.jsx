import React from 'react'

const Total = ({ parts }) => {
  let totalExercises = 0
  parts.forEach(part => {
    totalExercises += part.exercises
  })
  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

export default Total
