import "../styles/gameDetails.css"

function GameDetail() {
  return (
    <>
      <div>
        <div className="wrap">
          <div className="hero">
            <img
              src="https://media.rawg.io/media/games/b39/b396dac1f3e0f538841aa0355dd066d3.jpg"
              alt="Far Cry 4"
            />
            <div className="hero-grad"></div>
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-line"></span>Ubisoft · 2014 · Shooter
              </div>
              <div className="hero-title">Far Cry 4</div>
              <div className="hero-meta">
                <span className="score-pill">3.82</span>
                <span className="mc-pill">MC 80</span>
                <span className="meta-sep">·</span>
                <span className="meta-tag">MATURE</span>
                <span className="meta-sep">·</span>
                <span className="meta-tag">~17 HRS</span>
                <span className="meta-sep">·</span>
                <span className="meta-tag">7,740 PLAYERS</span>
              </div>
            </div>
          </div>

          <div className="body">
            <div className="left">
              <div className="section-label">
                <span className="badge-line"></span>About
              </div>
              <p className="desc">
                A first-person open-world shooter set in Kyrat — a fictional Himalayan
                region torn apart by civil war. You play as Ajay Ghale, caught between a
                ruthless dictator named Pagan Min and a rebel faction called the Golden
                Path. Explore a vast map, liberate outposts, climb bell towers, and
                craft your arsenal as the story unfolds.
              </p>

              <div className="section-label">
                <span className="badge-line"></span>Player Ratings
              </div>

              <div className="ratings-row">
                <div className="rating-item">
                  <span className="r-label">Recommended</span>
                  <div className="r-track">
                    <div className="r-fill r-recommended" style={{ width: "57.89%" }}></div>
                  </div>
                  <span className="r-pct">57.9%</span>
                </div>

                <div className="rating-item">
                  <span className="r-label">Meh</span>
                  <div className="r-track">
                    <div className="r-fill r-meh" style={{ width: "22.71%" }}></div>
                  </div>
                  <span className="r-pct">22.7%</span>
                </div>

                <div className="rating-item">
                  <span className="r-label">Exceptional</span>
                  <div className="r-track">
                    <div className="r-fill r-exceptional" style={{ width: "15.63%" }}></div>
                  </div>
                  <span className="r-pct">15.6%</span>
                </div>

                <div className="rating-item">
                  <span className="r-label">Skip</span>
                  <div className="r-track">
                    <div className="r-fill r-skip" style={{ width: "3.77%" }}></div>
                  </div>
                  <span className="r-pct">3.8%</span>
                </div>
              </div>

              <div className="section-label">
                <span className="badge-line"></span>Tags
              </div>

              <div className="tags-wrap">
                <span className="tag">Open World</span>
                <span className="tag">First-Person</span>
                <span className="tag">FPS</span>
                <span className="tag">Singleplayer</span>
                <span className="tag">Co-op</span>
                <span className="tag">Story Rich</span>
                <span className="tag">Atmospheric</span>
                <span className="tag">Stealth</span>
                <span className="tag">Survival</span>
                <span className="tag">Sandbox</span>
                <span className="tag">Crafting</span>
                <span className="tag">Exploration</span>
                <span className="tag">Action RPG</span>
                <span className="tag">Hunting</span>
                <span className="tag">RPG</span>
              </div>

              <div className="stats-mini">
                <div className="mini-card">
                  <div className="mini-label">Reviews</div>
                  <div className="mini-val">1,964</div>
                </div>
                <div className="mini-card">
                  <div className="mini-label">Achievements</div>
                  <div className="mini-val">471</div>
                </div>
                <div className="mini-card">
                  <div className="mini-label">Beaten</div>
                  <div className="mini-val">2,025</div>
                </div>
                <div className="mini-card">
                  <div className="mini-label">Dropped</div>
                  <div className="mini-val">618</div>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="stat-block">
                <div className="stat-label">Released</div>
                <div className="stat-val">Nov 18</div>
                <div className="stat-sub">2014</div>
              </div>

              <div className="divider"></div>

              <div className="stat-block">
                <div className="stat-label">Developer</div>
                <div className="stat-val" style={{ fontSize: "16px", letterSpacing: "0.02em" }}>
                  Ubisoft Montreal
                </div>
                <div className="stat-sub">Published by Ubisoft Entertainment</div>
              </div>

              <div className="divider"></div>

              <div className="stat-block">
                <div className="stat-label">Platforms</div>
                <div className="platforms-wrap" style={{ marginTop: "4px" }}>
                  <span className="platform-chip">PC</span>
                  <span className="platform-chip">PS4</span>
                  <span className="platform-chip">PS3</span>
                  <span className="platform-chip">Xbox One</span>
                  <span className="platform-chip">Xbox 360</span>
                </div>
              </div>

              <div className="divider"></div>

              <div className="stat-block">
                <div className="stat-label">Available On</div>
                <div className="stores-wrap" style={{ marginTop: "6px" }}>
                  <div className="store-row">
                    <span className="store-dot"></span>
                    <span className="store-name">Steam</span>
                  </div>
                  <div className="store-row">
                    <span className="store-dot"></span>
                    <span className="store-name">PlayStation Store</span>
                  </div>
                  <div className="store-row">
                    <span className="store-dot"></span>
                    <span className="store-name">Xbox Store</span>
                  </div>
                  <div className="store-row">
                    <span className="store-dot"></span>
                    <span className="store-name">Xbox 360 Store</span>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="stat-block">
                <div className="stat-label">Community</div>
                <div className="stat-val" style={{ fontSize: "15px" }}>202 Reddit</div>
                <div className="stat-sub">119 Twitch · 1M YouTube</div>
              </div>

              <div className="divider"></div>

              <div className="stat-block">
                <div className="stat-label">In Collections</div>
                <div className="stat-val">4,461</div>
                <div className="stat-sub">owned · 219 want to play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GameDetail;