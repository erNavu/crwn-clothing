import "./App.css";
import HomePage from "./pages/homepage/Homepage";
import {
  Routes,
  Route,
  useLocation,
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";
import Shop from "./pages/shop/shop";

// const About = (props) => {
//   console.log(props);
//   return <h1>About Us</h1>;
// };
// const Topic = (props) => {
//   console.log(useLocation());
//   let navigate = useNavigate();
//   return (
//     <div>
//       <h1>Topic </h1>
//       <Link to="9">Take me to number 9 </Link>
//       <button
//         onClick={() => {
//           console.log(navigate, "navigate");
//           navigate("3", { replace: true });
//         }}
//       >
//         Take me to number 3
//       </button>
//     </div>
//   );
// };

// const TopicId = (props) => {
//   console.log(useLocation());
//   console.log("matchPath", useParams(), props);
//   return <h1>Topic ID </h1>;
// };

const Hats = () => (
  <div>
    <h1>Hats </h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route path="about" element={<About />} />
        <Route path="topic" element={<Topic />} />
        <Route path="topic/:topicId" element={<TopicId />} /> */}
        <Route path="shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
