import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import ResetPassword from "./ResetPassword";
import Crypto from "./Crypto";
import Loader from './Loader';
import modelResetPassword from './modelResetPassword';

export { Home, Login, Register, Profile, ResetPassword, Crypto, Loader , modelResetPassword};

//import the real file through it's main path, then export it as just a name.
//import ResetPassword from './modelResetPassword';
// That way, it's easier to call it in other files.