
function GameDetailSidebar({ game }) {
  return (
    <div className="right">
      <SidebarBlock label="Released">
        <div className="stat-val">{game.released}</div>
      </SidebarBlock>

      <SidebarBlock label="Developer">
        <div className="stat-val">
          {game.developers?.map((d) => d.name).join(", ")}
        </div>
        <div className="stat-sub">
          Published by {game.publishers?.map((p) => p.name).join(", ")}
        </div>
      </SidebarBlock>

      <SidebarBlock label="Platforms">
        <div className="platforms-wrap">
          {game.platforms.map((p) => (
            <span className="platform-chip" key={p.platform.id}>
              {p.platform.name}
            </span>
          ))}
        </div>
      </SidebarBlock>

      <SidebarBlock label="Available On">
        <div className="stores-wrap">
          {game.stores.map((s) => (
            <div className="store-row" key={s.id}>
              <span className="store-dot" />
              <span className="store-name">{s.store.name}</span>
            </div>
          ))}
        </div>
      </SidebarBlock>

      <SidebarBlock label="Community">
        <div className="stat-val">{game.reddit_count} Reddit</div>
        <div className="stat-sub">
          {game.twitch_count} Twitch · {game.youtube_count} YouTube
        </div>
      </SidebarBlock>

      <SidebarBlock label="In Collections">
        <div className="stat-val">{game.added?.toLocaleString()}</div>
        <div className="stat-sub">
          owned · {game.added_by_status?.toplay} want to play
        </div>
      </SidebarBlock>
    </div>
  );
}

function SidebarBlock({ label, children }) {
  return (
    <>
      <div className="stat-block">
        <div className="stat-label">{label}</div>
        {children}
      </div>
      <div className="divider" />
    </>
  );
}

export default GameDetailSidebar;