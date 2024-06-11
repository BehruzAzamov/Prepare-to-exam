import { useRegister } from '../hooks/useRegister'

function Register() {
  const { signWithGoogle, isPending } = useRegister()
  return (
    <div className='container'>
      <h1 >Register</h1>
      {isPending && <p>Loading...</p>}
      <button onClick={signWithGoogle} className="btn btn-outline">Google</button>
    </div>
  )
}

export default Register