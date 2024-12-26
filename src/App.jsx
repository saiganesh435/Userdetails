
import Course from './Components/Course'
import Title from './Components/Title'
import UserCard from './Components/UserCard'
import data from './Components/data'

function App() {

  return (
    <>
     
      <Title/>
      {data.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
      <Course/>
    </>
  )
}

export default App
