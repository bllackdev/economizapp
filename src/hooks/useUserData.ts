import auth from "@react-native-firebase/auth";

export function useUserData() {
  const fullname = auth()?.currentUser?.displayName;
  const displayName = fullname ? fullname.split(" ").slice(0, 2).join(" ") : "";

  const email = auth()?.currentUser?.email;
  const photoURL = auth()?.currentUser?.photoURL;
  const uid = auth()?.currentUser?.uid;

  return {
    uid,
    displayName,
    email,
    photoURL,
  };
}
