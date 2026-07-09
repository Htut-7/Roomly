// import { useEffect } from "react";
// import "../Css/ActivityDetail.css";
// import useActivity from "../Hooks/useActivity";
// import { useParams } from "react-router-dom";

// export default function ActivityDetail() {

//     const {loading,error,getSingleActivity,singleActivity}=useActivity();

//     const { id }=useParams();

//     useEffect(()=>{
//         getSingleActivity(id);
//     },[id])

//   return (
//     <div className="activitydetail">
//         <div className="activitydetail-container">
//             {loading && <span className="activitydetail-spinner"></span>}

//             {error && <p className="activitydetail-error">{error}</p>}

//             <div className="activitydetail-grid">
//                 {singleActivity && (
//                     <div className="single-activity-detail">
                        
//                     </div>
//                 )}
//             </div>
//         </div>
//     </div>
//   )
// }
