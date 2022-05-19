import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToken } from "../../hooks";
import http from "../../utils/httpService/httpService";
import { Endpoints, ApplicationRoutes } from "../../types";
import { TUserJWTToken } from "./../../types/index";

const StaffLogin: React.FC = () => {
  const { getUserDataFromToken, setToken } = useToken();
  const [email, setEmail] = useState("test@testing.com");
  const [password, setPassword] = useState("password");
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUserLoginStatus() {
      try {
        const userData: TUserJWTToken = await getUserDataFromToken();
        userData && navigate(ApplicationRoutes.ConsoleDashboard);
      } catch (error) {
        console.error(20, error);
      }
    }

    checkUserLoginStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnSubmit = async () => {
    try {
      const { data } = await http.post(Endpoints.StaffLogin, {
        email,
        password
      });

      data?.token && setToken(data.token);
      navigate(ApplicationRoutes.ConsoleDashboard);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button onClick={handleOnSubmit}>Login</button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;
