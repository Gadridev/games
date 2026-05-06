import { useEffect, useState } from "react";
import { fetchCreators } from "../api/homeApi";
import { CreatorCard } from "../components/CreatorCard";

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

    if (loading) return <p>Loading creators...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <div>
                <h1>Creators</h1>
                <div>
                    {creators.map((creator) => (
                        <CreatorCard key={creator.id} creator={creator} />
                    ))}
                </div>
            </div>
        </>
    );
}
