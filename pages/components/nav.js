import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/nav.module.css";
import { RiMenu2Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { GiHunterEyes } from "react-icons/gi";
import { useRouter } from "next/router";
import { IoMdArrowDropdown } from "react-icons/io";
const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    subMenu: [
      { label: "services", path: "/about/services" },
      { label: "events", path: "/about/events" },
      { label: "terms of Service", path: "/about/terms" },
    ],
  },
  {
    label: "Blogs",
    path: "/productlist",
    subMenu: [
      { label: "Games", path: "/productlist/games" },
      { label: "Aging", path: "/productlist/aging" },
      { label: "Health", path: "/productlist/health" },
      { label: "Travel", path: "/productlist/travel" },
      { label: "Money", path: "/productlist/money" },
      { label: "Life", path: "/productlist/life" },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
    subMenu: [
      { label: "Social media", path: "/contact/social" },
      { label: "Email", path: "/contact/email" },
    ],
  },
  {
    label: "System User",
    path: "/user",
    subMenu: [
      { label: "Registration", path: "/user/registration" },
      { label: "Login", path: "/user/login" },
      { label: "Reset Password", path: "/user/reset" },
    ],
  },
];

// Update the Nav component

const Nav = () => {
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [mobileToggle, setMobileToggle] = useState(false);
  const [shouldCloseMenu, setShouldCloseMenu] = useState(false);
  const router = useRouter();

  const handleToggleSubmenu = (label, path) => {
    if (label === "mobileToggle") {
      setMobileToggle(!mobileToggle);
      setShouldCloseMenu(true);
    } else if (navItems.some((item) => item.label === label && item.subMenu)) {
      setOpenSubmenus((prevOpenSubmenus) => ({
        ...prevOpenSubmenus,
        [label]: !prevOpenSubmenus[label],
      }));
      setShouldCloseMenu(true);
    } else {
      handleCloseAllSubmenus();
      setShouldCloseMenu(true);
      router.push(path);
    }
  };

  const handleCloseAllSubmenus = () => {
    setOpenSubmenus({});
    setMobileToggle(false);
    setShouldCloseMenu(false);
  };

  return (
    <nav className={`${styles.navbar} ${mobileToggle ? styles.mobileOpen : ""}`}>
      <Link href="/">
        <a
          onClick={handleCloseAllSubmenus}
          style={{
            fontSize: "2rem",
            textDecoration: "none",
            color: "GrayText",
            padding: "1.2rem",
          }}
        >
          <GiHunterEyes size={50} style={{ color: "green" }} />
          Spicy Blog Hunter
        </a>
      </Link>
      <ul className={`${styles.nav_links} ${mobileToggle ? styles.show : ""}`}>
        {navItems.map((item) => (
          <li key={item.label} className={styles.menuItem}>
            <h1 onClick={() => handleToggleSubmenu(item.label, item.path)}>
              {item.label}
              {item.subMenu && <IoMdArrowDropdown />} {/* Render IoMdArrowDropdown if there's a submenu */}
            </h1>
            {item.subMenu && openSubmenus[item.label] && (
              <ul className={styles.submenu}>
                {item.subMenu.map((subItem) => (
                  <li key={subItem.label}>
                    <Link href={subItem.path} onClick={handleCloseAllSubmenus}>
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => handleToggleSubmenu("mobileToggle")}
        aria-label="Toggle Menu"
      >
        {mobileToggle ? <ImCross size={20} /> : <RiMenu2Line size={30} />}
      </button>
    </nav>
  );
};

export default Nav;