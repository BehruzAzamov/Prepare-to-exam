import { useCollection } from "../hooks/useCollection"
import { useSelector } from "react-redux"
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { db } from "../firebase/firebaseConfig";

function Home() {
  const { user } = useSelector(state => state.currentUser)
  const { data } = useCollection('tasks', ["uid", '==', user.uid])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, uid: user.uid };
    addDoc(collection(db, "tasks"), newTask)
  };


  const deleteBtn = async (taskId) => {
    try {
      await deleteDoc(doc(db, "tasks", taskId));
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };


  return (
    <div className="justify-items-center">
      <h1 className="text-3xl font-bold mb-3">Add new todo:</h1>
      <form>
        <input placeholder="Type here" className="block input input-bordered mb-3 w-full" onChange={(e) => setTitle(e.target.value)} type="text" />
        <input placeholder="Type here" className="block input input-bordered mb-3 w-full " onChange={(e) => setDescription(e.target.value)} type="text" />
        <button onClick={handleSubmit} className="btn btn-outline w-full">Submit</button>
      </form>

      {data && data.map((item) => (
        <div className="flex bg-slate-600 rounded-lg px-5 w-full pt-4  mt-3 justify-between items-center mb-3">
          <p className="text-xl font-bold">{item.title}</p>
          <MdDelete className="mb-2 cursor-pointer" onClick={() => deleteBtn(item.id)} />
        </div>
      ))}
    </div>
  )
}

export { Home }