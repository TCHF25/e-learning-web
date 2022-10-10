import "./sidebar.css";

const Sidebar = () => {
  return (
  <div class="nav-header">
        <div class="side-nav">
            <div class="nav-top">
                <div class="logo-container">
                    <h1>HELLO</h1>
                </div>
                <a href=""><button class="overeview">Overview</button></a>
                <div class="link-list">
                    <a href="" class="link">
                        <i class="fa-solid fa-users"></i>
                        <span class="link-text">Instructors</span>
                    </a>
                    <a href="" class="link">
                        <i class="fa-solid fa-user-tag"></i>
                        <span class="link-text">Students</span>
                    </a>
                    <a href="" class="link">
                        <i class="fa-solid fa-chart-pie"></i>
                        <span class="link-text">Courses</span>
                    </a>
                </div>
            </div>
            <div class="nav-bottom">
                <button id="signOutBtn">Sign out <i class="fa-solid fa-right-from-bracket"></i></button>
                <p class="panelFooter">Admin panel</p>
            </div>
        </div>
    </div>
  )
}
  
    
export default Sidebar;