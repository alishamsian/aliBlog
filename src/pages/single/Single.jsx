import SingelPost from "../../components/singlePost/SinglePost"
import SideBar from '../../components/sidebar/SideBar';
import './single.css'
const Single = () => {
  return (
  <div className="single">
      <SingelPost />
      <SideBar />
  </div>
  );
};

export default Single;
