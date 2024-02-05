import React, {
  useEffect,
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { useToast } from "native-base";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import {
  GoogleSignin,
  User,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextData = {
  signIn: () => void;
  signOut: () => void;
  isLogging: boolean;
  getCurrentUser: () => Promise<void>;
  user: User | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
  photo: string;
  familyName: string;
  givenName: string;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const toast = useToast();
  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const USER_COLLECTION = `@economizehoje:users`;

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        console.log("ERROR: ", error);
      }
    }
  }

  function signIn() {
    setIsLogging(true);

    onGoogleButtonPress().then(async (response) => {
      const { user } = response as any;

      const userData = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        familyName: user.familyName,
        givenName: user.givenName,
      } as UserProps;

      await firestore().collection("users").doc(userData.id).set(userData);

      await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userData));

      setUser(userData);
      setIsLogging(false);
    }).catch((error) => {
        console.log("ERROR: ", error);
        setIsLogging(false);
    });
  }

  async function signOut() {
    try {
      await GoogleSignin.signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadUserStoreData() {
    setIsLogging(true);

    const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storedUser) {
      const userData = JSON.parse(storedUser) as User;
      setUser(userData);
    }

    setIsLogging(false);
  }

  async function getCurrentUser() {
    const currentUser = await GoogleSignin.getCurrentUser();
    // setUser(currentUser);
  }

  useEffect(() => {
    loadUserStoreData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isLogging,
        getCurrentUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
