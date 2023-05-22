import React, { createContext, useReducer, useState } from 'react';
import { User } from '../types/credential';
import { Cam } from '../types/cams';

interface CamState {
  cam? : Cam
}

interface CamContextValue extends CamState {
  setCam : (cam:Cam) =>void
}

const initialState : CamContextValue = {
  cam:null,
  setCam:()=>{}
}

// Create the context
const CamContext = createContext<CamContextValue>(initialState);

const CamContextProvider = ({ children }) => {
  const [cam,setCam] = useState<Cam|null>(null);
  return (
    <CamContext.Provider value={{cam,setCam}}>
      {children}
    </CamContext.Provider>
  );
};


export { CamContextProvider };
export default CamContext;
