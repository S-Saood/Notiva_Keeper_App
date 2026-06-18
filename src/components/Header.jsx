import React, {useState} from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";


function Header({searchTerm, setSearchTerm, darkMode, setDarkMode} ) {
  const [showSearch, setShowSearch] = useState(false)
  const [showMenu, setShowMenu] = useState(false)




  return (
    <header>
      {!showSearch ? (
        <>
      <h1>
        <HighlightIcon />
        Notiva
      </h1>
        
        <div className="func-icon">
        <SearchOutlinedIcon
  sx={{ fontSize: 28, cursor: "pointer" }}
  onClick={() => setShowSearch(true)}
/>
        <DarkModeOutlinedIcon sx={{ fontSize: 28 }} onClick={()=> setDarkMode(prev => !prev)}  />
        <MoreVertOutlinedIcon sx={{ fontSize: 28 }} 
        onClick={()=> setShowMenu(prev => !prev)}/>
      </div>

      {showMenu && (
        <div className="sidebar-menu">
          <div className="menu-item">Settings</div>
          <div className="menu-item">About</div>
          <div className="menu-item">Help</div>
        </div>
      )}
        </>
      ): (
        <div className="search-container">
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <CloseOutlinedIcon
            sx={{ fontSize: 28, cursor: "pointer" }}
            onClick={() => setShowSearch(false)}
          />
        </div>
      )}
      
    </header>
  );
}

export default Header;
