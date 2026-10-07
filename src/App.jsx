import Welcome from "./components/Welcome";
import Myprofile from "./components/Profile";
import Myskills from "./components/Skills";
import Students from "./components/Students";
import Product from "./components/Product";

function App() {    
    return (
        <div>
            <h2>Hello React</h2>
            <h1>Hello Varun</h1>

            <Welcome />
            <Myprofile name = "ronaldo" age={23}/>
            <Myskills />
            <Students name = "varun" age={23} course="MERN Stack"/>
            <Product name="Laptop" price={60000} category="Electronics"/>
        </div>
    );
}

export default App;