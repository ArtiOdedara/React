import React, { useId } from 'react'

function HealthInformation() {
  const randomId = useId()
  console.log(randomId);
  return (
    <div>HealthInformation</div>
  )
}

export default HealthInformation