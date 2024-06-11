import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";

function useRegister() {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);

  const signWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      setIsPending(true);
      const result = await signInWithPopup(auth, provider);
      const user = {
        uid: result.user.uid,
        displayName: result.user.displayName,
        email: result.user.email,
      };
      console.log(user);
      dispatch(login(user));
      setIsPending(false);
    } catch (error) {
      setIsPending(false);
      const errorMessage = error.message;
      alert(errorMessage);
      const email = error.customData.email;
    }
  };

  return { signWithGoogle, isPending };
}

export { useRegister };
