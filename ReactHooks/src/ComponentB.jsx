import React,{useContext} from "react";
import ComponentC  from "./ComponentC";
import { UserContext, OccupationContext } from "./App";

export default function componentB(){
  const user = useContext(UserContext)
  const occupation = useContext(OccupationContext)
  return(
    <>
      <div>{user}- {occupation}</div>
      <ComponentC />
    </>
  )
}
