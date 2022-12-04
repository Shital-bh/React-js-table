import './tablecomponent.css';
import { useEffect, useState } from "react";
import tablefileData from "../jsonData/tableData.json";



function Table(props) {

   const { tableconfigData } = props;
   // destructuring
 
// set state are used
   const [sorting, setSorting] = useState({ key: "city", ascending: true });
   const [currentUsers, SetCurrentUsers] = useState(tablefileData);



   useEffect(() => {
      const currentUsersData = [...currentUsers];
   // sort string by property
      const sortedCurrentUsers = currentUsersData.sort((a, b) => {
      //  to get the name key inside the person object
         if (sorting.key === "person") {
            return a.person.name.localeCompare(b.person.name);
         }
         return a[sorting.key].localeCompare(b[sorting.key]);
      });
//  using dependency
      SetCurrentUsers(
         sorting.ascending ? sortedCurrentUsers : sortedCurrentUsers.reverse()
      );
   }, [sorting]);
// onclick func for sorting
   function applySorting(key, ascending) {
      setSorting({ key: key, ascending: ascending });
   }



   return (
      <div className='App'>

         <table>
            <thead>
               <tr>
                  {tableconfigData.map((element, index) => {
                     return (
                        <th key={index}>
                       {/* change the heading title */}
                         {
                           element.ColName === "person" ?
                              "name"
                              :
                              element.ColName ==="email" ?
                               "email Address"
                                 :
                                 element.ColName}
                           {/* sorting icon by onClick */}
                           {element.sortvisible ? <img className='swapimg' src="/assest/up-down.png" onClick={() => applySorting(element.ColName, !sorting.ascending)} /> : ""}
                        </th>);
                  })}
               </tr>
            </thead>
            <tbody>
               {/* map func used to show data one by one */}
               {currentUsers.map((Dataelement, index) => {
                  return (

                     <tr key={index}>
                        {tableconfigData.map((element, index) => {
                           return element.ColName === "person" ? (
                              <td key={index}><img src={`/assest/${Dataelement.person.avatar}`} className="avtarimg" />{Dataelement.person.name}</td>
                           ) : 
                            element.ColName ==="email" ?
                            (<td key ={index} className= "email">
                           {/* email link attached */}
                             <a href='#'className='emailclass'>{Dataelement.email}</a>
                                </td>
                              
                           ):
                           //  show other data
                           (
                           <td key={index}> {Dataelement[element.ColName]}</td>)

                        })}


                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}
export default Table;