import { Fragment } from 'react'
import { Signature, LunchSets, Dinner } from "./index";

export default (params) => {
    
    return(
       <Fragment>
           <div>
               <h3>Chef Menu</h3>
           </div>
           <img src="  v./images/100_1040312_mercer_knives_0391_fweb-705x529.jpg" />
           <Signature />
           <LunchSets />
           <Dinner />
       </Fragment>
    )
}