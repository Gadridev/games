import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => {
        if (path === "/" && location.pathname === "/") return true;
        if (path === "/games" && location.pathname === "/games") return true;
        if (path === "/creators" && location.pathname === "/creators") return true;
        return false;
    };

    return (
        <nav id="navbar">
            <div
                style={{
                    maxWidth: "1440px",
                    margin: "0 auto",
                    padding: "0 32px",
                    height: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "24px"
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                   
                    <div
                        onClick={() => navigate("/")}
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "baseline",
                            gap: "4px"
                        }}
                        
                    >
                        <span
                            className="bebas"
                            style={{ fontSize: "23px", color: "var(--amber)", letterSpacing: "3px" }}
                        >
                            GAME
                        </span>
                        <span
                            className="bebas"
                            style={{ fontSize: "23px", color: "var(--ice)", letterSpacing: "3px" }}
                        >
                            EXPLORER
                        </span>
                        <span
                            style={{
                                width: "6px",
                                height: "6px",
                                background: "var(--amber)",
                                borderRadius: "50%",
                                marginLeft: "3px",
                                marginBottom: "3px",
                                display: "inline-block",
                                animation: "blink 2s ease infinite",
                                flexShrink: 0
                            }}
                        ></span>
                    </div>

                    
                    <div style={{ display: "flex", gap: "4px" }} className="hide-m">
                        <span 
                            className={`nav-pill ${isActive("/") ? "active" : ""}`}
                            onClick={() => navigate("/")}
                            style={{ cursor: "pointer" }}
                        >
                            HOME
                        </span>
                        <span 
                            className={`nav-pill ${isActive("/games") ? "active" : ""}`}
                            onClick={() => navigate("/games")}
                            style={{ cursor: "pointer" }}
                        >
                            GAMES
                        </span>
                        <span 
                            className={`nav-pill ${isActive("/creators") ? "active" : ""}`}
                            onClick={() => navigate("/creators")}
                            style={{ cursor: "pointer" }}
                        >
                            
                            CREATORS
                        </span>
                    </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ position: "relative" }}>
                        <input className="srch" placeholder="SEARCH..." />
                        <svg
                            style={{
                                position: "absolute",
                                left: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "var(--fog)"
                            }}
                            width="14"
                            height="14"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>

                    <div
                        style={{
                            width: "34px",
                            height: "34px",
                            borderRadius: "2px",
                            background: "linear-gradient(135deg, #f5a623, #e8920f)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            flexShrink: 0
                        }}
                    >
                        <span
                            className="mono"
                            style={{ fontSize: "11px", fontWeight: 700, color: "var(--ink)" }}
                        >
                            GX
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;