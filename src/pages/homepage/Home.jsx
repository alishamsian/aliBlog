import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import SideBar from "../../components/sidebar/SideBar"

const HomePage = () => {
    return (
        <>
           <Header /> 
           <div className="home d-flex">
               <Posts />
               <SideBar />
           </div>
        </>
    )
}

export default HomePage
