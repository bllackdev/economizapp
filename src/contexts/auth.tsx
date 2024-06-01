import { ReactNode, createContext, useContext, useState } from "react";

import auth from "@react-native-firebase/auth";
import { GoogleSignin, User } from "@react-native-google-signin/google-signin";
import { router } from "expo-router";

type AuthContextData = {
  signIn?: (email: string, password: string, type: string) => Promise<void>;
  signInGoogle: () => Promise<void>;
  signOut: () => void;
  isLogging: boolean;
  user: User | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function signInGoogle() {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    const userInfo = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );

    auth()
      .signInWithCredential(googleCredential)
      .then(() => {
        setUser(userInfo);
        router.navigate("(tabs)");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const messageError = toast.show({
        //   title: `Algo deu errado. Tente novamente mais tarde! Código: ${errorCode}`,
        //   placement: "top",
        //   color: "red.500",
        // });
        return errorCode;
      });
  }

  async function signOut() {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    await auth()
      .signOut()
      .then(() => {
        setUser(null);
        router.navigate("(auth)");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const messageError = toast.show({
        //   title: `Algo deu errado. Tente novamente mais tarde! Código: ${errorCode}`,
        //   placement: "top",
        //   color: "red.500",
        // });
        return errorCode;
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signInGoogle,
        signOut,
        isLogging,
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
