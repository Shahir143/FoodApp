import { useState, createContext, useContext } from "react";
import * as useService from "../services/userService";
import { toast } from "sonner";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(useService.getUser());

  const login = async (email, password) => {
    try {
      const user = await useService.login(email, password);
      setUser(user);
      toast.success("Login successful");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const register = async (data) => {
    try {
      const user = await useService.register(data);
      setUser(user);
      toast.success("Register successful");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const logout = () => {
    useService.logout();
    setUser(null);
    toast.success("Logout successful");
  };

  const updateProfile = async (user) => {
    const updateData = await useService.updateProfile(user);
    toast.success("Profile updated successfully");
    if (updateData) setUser(updateData);
  };

  const changePassword = async (password) => {
    await useService.changePassword(password);
    logout();
    toast.success("Password updated successfully");
  };
  return (
    <AuthContext.Provider
      value={{ user, login, logout, changePassword, updateProfile, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
