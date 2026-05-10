import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import "../styles/creatorDetails.css";
import { fetchGameDetails } from "../api/homeApi";

function GameDevelopers() {
    const { gameId } = useParams();
    const navigate = useNavigate();

    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const gameData = await fetchGameDetails(gameId);
                setGame(gameData);
            } catch (err) {
                console.error("Error loading game team:", err);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [gameId]);

    if (loading) return <Loader />;
    if (!game) return <p>Game not found</p>;

    return (
        <div className="creator-detail">
            <button
                className="creator-detail__back"
                onClick={() => navigate("/games")}
            >
                ← BACK TO GAMES
            </button>

            <div className="creator-profile">
                <img
                    className="creator-profile__img"
                    src={game.background_image}
                    alt={game.name}
                />

                <div className="creator-profile__info">
                    <div className="creator-profile__label">
                        <span className="creator-profile__label-line" />
                        DEVELOPMENT TEAM
                    </div>

                    <h1 className="creator-profile__name">
                        {game.name}
                    </h1>

                    <p className="creator-profile__role">
                        {game.developers?.length > 0
                            ? game.developers.map((dev) => dev.name).join(" · ")
                            : "Unknown Developers"}
                    </p>

                    <p className="creator-profile__bio">
                        {game.description_raw || "No description available."}
                    </p>
                </div>
            </div>

            <div className="creator-detail__rule" />

            <div className="creator-games__label">
                <span className="creator-profile__label-line" />
                DEVELOPMENT TEAM
            </div>
            {game.developers?.length > 0 ? (
                <div className="creator-games__row">
                    {game.developers.map((developer) => (

                        <div
                            key={developer.id}
                            style={{
                                width: 220,
                                minHeight: 140,
                                background: "#111",
                                border: "1px solid rgba(255,255,255,0.08)",
                                padding: "20px",
                                borderRadius: "6px",
                                flexShrink: 0,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: "12px",

                            }}

                        >
                            <h3
                                style={{
                                    color: "white",
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    margin: 0,
                                }}
                            >
                                {developer.name}
                            </h3>

                            <p
                                style={{
                                    color: "var(--amber)",
                                    fontSize: "13px",
                                    letterSpacing: "2px",
                                    margin: 0,
                                    textTransform: "uppercase",
                                }}
                            >
                                Developer
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="creator-games__empty">
                    No developers found
                </p>
            )}
        </div>
    );
}

export default GameDevelopers;