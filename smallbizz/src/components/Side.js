import "./Side.css";
import { SidebarData } from "./SidebarData";
function Side(){

    return(
        <div className="Sidebar">
        <ul className="Sidebarlist">
            {SidebarData.map((val, key) => {
                return(
                    <li key={key} 
                    className="row"
                    onClick={()=>{window.location.pathname=val.link}}>
                    
                        <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
                    </li>
                )
            })}
            </ul>
        </div>
        // {/* <Button variant="primary" onClick={handleLogout}>
        //       Log out
        //     </Button> */}

            
    );
}
export default Side;