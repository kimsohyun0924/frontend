import React, { useReducer, createContext, useContext } from 'react';

const initialValue = {
  menuOpen : true,
  token: "",
  dbaasStatus: "",
  totalVM: 0,
  messageBoxFlag: false,
  messageBoxContent: "",
  platformId: "d1",
  zoneId : "",
  tenantId: "",
  tierId: "",
  accessKey: "",
  secretKey: "",
  developMode: "dev",
}

interface MenuContext {
    menuOpen?: boolean,
    token?: string,
    dbaasStatus?: string,
    totalVM?: number,
    messageBoxFlag?: boolean,
    messageBoxContent?: string,
    platformId?: string,
    zoneId?: string,
    tenantId?: string,
    tierId?: string,
    accessKey?: string,
    secretKey?: string,
    developMode?: string,
}

type WrapperProps = {
	children: React.ReactNode;
} 

function menuReducer(state: any, action: any) {

  switch(action.type) {
    case 'UPDATE':
      return action.data;      
    default:
      throw new Error(`Unhandled action type : ${action.type}`);      
  }
}

const MenuStateContext = createContext<MenuContext[]>([]); 
const MenuDispatchContext = createContext<MenuContext[]>([]); 

// export function MenuProvider({children} : WrapperProps) {
//   const[state, dispatch] = useReducer(menuReducer, initialValue);

//   return (
//     <MenuStateContext.Provider value={state}>
//       <MenuDispatchContext.Provider value={dispatch}>        
//         {children}        
//       </MenuDispatchContext.Provider>
//     </MenuStateContext.Provider>
//   );
// }

export function useMenuState() {
  const context = useContext(MenuStateContext);
  if(!context) {
    // throw new Error('Cannot find MenuProvider');
  }
  return context;
}

export function useMenuDispatch() {
  const context = useContext(MenuDispatchContext);
  if(!context) {
    throw new Error('Cannot find MenuProvider');
  }
  return context;
}

