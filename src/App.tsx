import { Route, Routes } from "react-router-dom";
import Header from "@/components/header";
import Home from "@/components/Home/home";
import SignupForm from "@/components/Auth/signup";
import LoginForm from "@/components/Auth/login";
export default function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </>
  );
}
