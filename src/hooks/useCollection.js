import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";

function useCollection(currentCollection, userParams) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let unsubscribe;
    if (userParams[2]) {
      const q = query(collection(db, currentCollection), where(...userParams));
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        try {
          const foods = [];
          querySnapshot.forEach((doc) => {
            foods.push({ id: doc.id, ...doc.data() });
          });
          setData(foods);
          setError(null);
        } catch (error) {
          console.error("Error fetching data:", error);
          setData(null);
          setError(error);
        }
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [currentCollection, userParams[2]]);

  return { data, error };
}

export default useCollection;
