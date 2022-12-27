import { createContext } from "react";
import UserType from "src/types/user";

type UserProviderContextType = {
  user: UserType | null;
}

export const UserProviderContext =  createContext<UserProviderContextType>({
  user: null
});

export default function UserProvider(props: ) {
  user: null
}
