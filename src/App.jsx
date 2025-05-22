import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import TagList from "./components/TagList/TagList";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen((prev) => !prev);
    }
  };

  return (
    <div
      className={`app ${sidebarOpen ? "sidebar-visible" : "sidebar-hidden"}`}
    >
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="content">
        <Header />
        <div className="main-content">
          <PostList />
          <TagList />
        </div>
      </main>
    </div>
  );
}

export default App;
