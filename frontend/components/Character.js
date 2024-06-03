import React, {useState} from 'react'

function Character({data}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const [showHomeworld, setShowHomeworld] = useState(false)
  
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld)
  }

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className="character-name">{data.name}</h3>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>Birth Year: {data.birth_year}</p>
      {showHomeworld && 
        <p>Planet: <span className="character-planet">{data.homeworld.name}</span></p>
      }
    </div>
  )
}

export default Character
