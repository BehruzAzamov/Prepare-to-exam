import { useCollection } from "../hooks/useCollection"
import { useSelector } from "react-redux"

function Home() {
  const { user } = useSelector(state => state.currentUser)
  const { data } = useCollection('foods', ["uid", '==', user.uid])
  console.log(data);
  return (
    <div className="justify-items-center">
      <h1 className="text-3xl font-bold mb-3">Add new todo:</h1>
      <form>
        <input placeholder="Type here" className="block input input-bordered mb-3 w-full max-w-xs" onChange={(e) => setTitle(e.target.value)} type="text" />
        <input placeholder="Type here" className="block input input-bordered mb-3 w-full max-w-xs" onChange={(e) => setDescription(e.target.value)} type="text" />
        <button className="btn btn-outline w-full">Submit</button>
      </form>

      {data && data.map((item) => (
        <div className="flex justify-between items-center mb-3">
          <p className="text-xl font-bold">{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Home