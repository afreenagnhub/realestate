import React, { useEffect, useState } from "react";
import { useDarkMode } from "./DarkModeContext";
import { FaBars, FaXmark} from "react-icons/fa6";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import axios from 'axios';
const Header = () => {
  const { darkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState(null); //  Toast message
  // const [name, setName] = useState('');
  // const [name, setName] = useState([]);  //axios get


  // Load current user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser")) ;
    console.log(storedUser);
    if (storedUser) setUser(storedUser);
  }, []);

  // localstorage.setItem("key", "value")          // saving
  //localstorage.removeItem("key")             // remove
  // localstorage.clear("key")    //clear

  // Auto-hide toast after 3 sec
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Properties", path: "/properties" },
    { link: "Services", path: "/services" },
    { link: "Testimonials", path: "/testimonials" },
    { link: "Contact", path: "/contactp" },
  ];

  // Handle login / signup
  const handleAuth = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      // LOGIN
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );
      if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        setUser(foundUser);
        setToast(`👋 Welcome back, ${foundUser.name.split(" ")[0]}!`);
        setShowModal(false);
      } else {
        setToast("❌ Invalid email or password");
      }
    } else {
      // SIGNUP
      const existing = users.find((u) => u.email === email);
      if (existing) {
        setToast("⚠️ Email already registered. Please log in.");
        setIsLogin(true);
      } else {
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        setUser(newUser);
        setToast(`✅ Welcome, ${newUser.name.split(" ")[0]}!`);
        setShowModal(false);
      }
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    setToast("🚪 Logged out successfully");
  };


  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then(response=>{
  //     setName(response.data)
  //   })
  //   .catch(error=>{
  //     console.error('Error', error);
  //   })
  // })

  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  // }

  axios.post('https://jsonplaceholder.typicode.com/posts', {name})
  .then(response=>{
    console.log('DATA', response.data)
  })
  .catch(error=>{
    console.error('ERROR', error)
  })

  return (
    <>
      {/* Navbar */}
      <nav
        className={`${
          darkMode === "dark" ? "bg-black" : "bg-[#f3f3f3]"
        } flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30 backdrop-blur-md bg-opacity-90`}
      >
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="company logo"
            className="lg:w-[150px] w-[120px] dark:invert"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="lg:flex justify-center items-center gap-8 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="text-black text-[15px] uppercase font-semibold cursor-pointer 
                px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white"
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaXmark className="text-black dark:text-white text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-black dark:text-white text-2xl cursor-pointer" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="text-white uppercase font-semibold cursor-pointer 
                  p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center lg:gap-8 gap-2">
          {/* Phone */}
          <div className="flex justify-center items-center lg:gap-3 gap-1">
            <FaPhoneAlt className="w-5 h-5 text-red-600" />
            <h1 className="lg:text-xl text-sm text-black dark:text-white font-semibold">
              9876543210
            </h1>
          </div>

          {/* User Section */}
          {user ? (
            <div className="relative group flex items-center gap-2 cursor-pointer">
              <FaUserCircle className="w-6 h-6 text-red-600" />
              <span className="font-semibold text-black dark:text-white">
                Hi, {user.name.split(" ")[0]}
              </span>

              {/* Dropdown */}
              <div className="absolute hidden group-hover:flex flex-col right-0 bg-white dark:bg-slate-800 shadow-md rounded-lg mt-10 min-w-[120px]">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-left text-sm hover:bg-red-600 hover:text-white"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <FaUserCircle
              className="w-6 h-6 text-red-600 cursor-pointer hover:text-red-700 transition"
              onClick={() => setShowModal(true)}
            />
          )}
        </div>
      </nav>

      {/* Login / Signup Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-lg"
            >
              ✕
            </button>

            {/* Tabs */}
            <div className="flex mb-4">
              <button
                className={`flex-1 py-2 font-semibold ${
                  isLogin
                    ? "border-b-2 border-red-600 text-red-600"
                    : "text-gray-500 dark:text-gray-300"
                }`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 font-semibold ${
                  !isLogin
                    ? "border-b-2 border-red-600 text-red-600"
                    : "text-gray-500 dark:text-gray-300"
                }`}
                onClick={() => setIsLogin(false)}
              >
                Signup
              </button>
            </div>

            <form onSubmit={handleAuth}>
              {!isLogin && (
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full mb-3 border px-3 py-2 rounded dark:bg-slate-700 dark:text-white"
                />
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full mb-3 border px-3 py-2 rounded dark:bg-slate-700 dark:text-white"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full mb-3 border px-3 py-2 rounded dark:bg-slate-700 dark:text-white"
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ✅ Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-md shadow-lg animate-fade-in z-[1000]">
          {toast}
        </div>
      )}
{/* axios get data -  */}
      {/* <ul>
        {
          name.map((user)=>(
             <li key={user.id}>{user.title}</li>
          ))
        }
      </ul> */}


      {/* axios post data - form  */}
      {/* <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Enter"
        value={name}
        onChange={(e)=>setName(e.target.value)}/>
        <button type="submit">Submit</button>
      </form> */}



    </>
  );
};

export default Header;
