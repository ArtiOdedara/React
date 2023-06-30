import React from "react";
import { UserContext } from './App'
import { OccupationContext } from "./App";

export default function componentC(){
  return(
    <>
      <div>
        <UserContext.Consumer>
          {
            user => {
              return(
                <OccupationContext.Consumer>
                {
                  occupation => {
                  return <div>hii {user}. You are {occupation}</div>
                }
  
              }
            
            </OccupationContext.Consumer>
          )
          }
        }
        </UserContext.Consumer>
      </div>
    </>
  )
}
