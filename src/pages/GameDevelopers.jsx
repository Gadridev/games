import { useEffect, useState } from "react";
import { fetchCreators } from "../api/homeApi";
import { CreatorCard } from "../components/CreatorCard";
import Loader from "../components/Loader";         // ← zid loader
import "../styles/CreatorStyle.css";               // ← zid CSS

export default function GameDevelopers() {
    const [creators, setcreators] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadCreators() {
            try {
                const data = await fetchCreators();
                setcreators(data);
            } catch (err) {
                setError("Failed to load creators");
            } finally {
                setLoading(false);
            }
        }
        loadCreators();
    }, []);

    if (loading) return <Loader text="LOADING CREATORS" />; 
    if (error) return <p className="error-msg">{error}</p>;

    return (
        <div className="creators-page">
            <div className="creators-header">
                <h1 className="creators-title">GAME CREATORS</h1>
                <p className="creators-sub">The visionaries behind your favorite worlds</p>
            </div>
            <div className="creators-grid">
                {creators.map((creator) => (
                    <CreatorCard key={creator.id} creator={creator} />
                ))}
            </div>
        </div>
    );
}