import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { toast } from "react-toastify";
import { IMG } from "../../assets/img";
import {
  logoutUser,
  resetAuthState,
} from "../../redux/features/auth/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const activeDropdowns = {};
    sidebarLinks.forEach((item) => {
      if (item.type === "dropdown") {
        const isChildActive = item.items.some(
          (child) => location.pathname === child.path
        );
        if (isChildActive) activeDropdowns[item.label] = true;
      }
    });
    setDropdowns(activeDropdowns);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      dispatch(resetAuthState());
      navigate("/admin/login");
      toast.success("Logout successful");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleDropdown = (menu) => {
    setDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const isActive = (path) =>
    location.pathname === path ? "bg-blue-100 text-blue-500" : "";

  const sidebarLinks = [
    { path: "/admin/dashboard", label: "Dashboard", type: "link" },
    {
      label: "Pages",
      type: "dropdown",
      items: [
        { path: "/admin/page/all", label: "All Pages" },
        { path: "/admin/page/add", label: "Add Page" },
      ],
    },
    {
      label: "Blogs",
      type: "dropdown",
      items: [
        {
          path: "/admin/blog/category",
          label: "Blog Categories",
        },
        { path: "/admin/blog/all", label: "All Blogs" },
        { path: "/admin/blog/add", label: "Add Blog" },
      ],
    },
    {
      label: "Banners",
      type: "dropdown",
      items: [
        { path: "/admin/banner/all", label: "All Banners" },
        { path: "/admin/banner/add", label: "Add Banner" },
      ],
    },
    { path: "/admin/contact/all", label: "All Contacts", type: "link" },
    {
      label: "Contents",
      type: "dropdown",
      items: [
        { path: "/admin/content/section", label: "Content Section" },
        { path: "/admin/content/all", label: "All Content" },
        { path: "/admin/content/add", label: "Add Content" },
      ],
    },
    {
      label: "Tags",
      type: "dropdown",
      items: [
        { path: "/admin/tag/all", label: "All Tags" },
        { path: "/admin/tag/add", label: "Add Tag" },
      ],
    },
    {
      label: "Dashboard Users",
      type: "dropdown",
      items: [
        { path: "/admin/user/all", label: "All Users" },
        { path: "/admin/register", label: "Register User" },
      ],
    },
    { path: "/admin/change-password", label: "Change Password", type: "link" },
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-gray-500 rounded-lg sm:hidden hover:bg-blue-100 focus:outline-none"
      >
        <span className="sr-only">Open sidebar</span>
        <IoMenuOutline />
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 w-72 h-screen shadow-lg s transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        style={{ backgroundColor: "#F6FAFF" }}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex justify-end sm:hidden">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoClose size={24} />
            </button>
          </div>

          <div className="p-4 pb-8">
            <img src={IMG.Logo} alt="" />
          </div>

          <ul className="space-y-2 font-medium">
            {sidebarLinks.map((item, index) =>
              item.type === "link" ? (
                <SidebarLink
                  key={index}
                  to={item.path}
                  label={item.label}
                  isActive={isActive}
                  onClick={toggleSidebar}
                />
              ) : (
                <SidebarDropdown
                  key={index}
                  label={item.label}
                  isOpen={dropdowns[item.label]}
                  toggle={() => toggleDropdown(item.label)}
                  items={item.items}
                  isActive={isActive}
                />
              )
            )}

            <li>
              <button
                onClick={handleLogout}
                className="w-full flex items-center p-2 text-gray-700 rounded-lg hover:bg-blue-100"
              >
                <span className="ms-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

const SidebarLink = ({ to, label, isActive, onClick }) => (
  <li>
    <Link
      onClick={onClick}
      to={to}
      className={`flex items-center p-2 text-gray-700 rounded-lg hover:bg-blue-100 ${isActive(
        to
      )}`}
    >
      <span className="ms-3">{label}</span>
    </Link>
  </li>
);

const SidebarDropdown = ({ label, isOpen, toggle, items, isActive }) => (
  <li>
    <button
      onClick={toggle}
      className="flex items-center w-full p-2 text-base text-gray-700 rounded-lg hover:bg-blue-100"
    >
      <span className="flex-1 ms-3 text-left">{label}</span>
      {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </button>
    {isOpen && (
      <ul className="py-2 space-y-2">
        {items.map(({ path, label }, index) => (
          <li key={index}>
            <Link
              to={path}
              className={`flex items-center w-full p-2 text-gray-700 rounded-lg pl-11 hover:bg-blue-100 ${isActive(
                path
              )}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </li>
);
