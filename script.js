const collections = {
  famous: [
    ["ラ・カンパネラ", "La campanella"],
    ["愛の夢 第3番", "Liebesträume No. 3"],
    ["ハンガリー狂詩曲 第2番", "Hungarian Rhapsody No. 2"],
    ["ため息", "Un sospiro"],
    ["メフィスト・ワルツ 第1番", "Mephisto Waltz No. 1"],
  ],
  deep: [
    ["巡礼の年 第2年『ダンテを読んで』", "Après une lecture du Dante"],
    ["巡礼の年 第3年『エステ荘の噴水』", "Les jeux d’eaux à la Villa d’Este"],
    ["孤独の中の神の祝福", "Bénédiction de Dieu dans la solitude"],
    ["バラード 第2番", "Ballade No. 2"],
    ["コンソレーション 第3番", "Consolation No. 3"],
    ["超絶技巧練習曲 第10番", "Étude d’exécution transcendante No. 10"],
  ],
};

function createTrack([japaneseTitle, originalTitle], index) {
  const article = document.createElement("article");
  article.className = "track";
  article.innerHTML = `
    <span class="track-number">${String(index + 1).padStart(2, "0")}</span>
    <div>
      <h3>${japaneseTitle}</h3>
      <p class="original-title">${originalTitle}</p>
    </div>
    <button class="listen-button" type="button" aria-label="${japaneseTitle}をYouTubeで検索して聴く">
      <span class="button-label">YouTubeで聴く</span>
      <span class="play-icon" aria-hidden="true">▶</span>
    </button>`;

  article.querySelector("button").addEventListener("click", () => {
    const query = encodeURIComponent(`フランツ・リスト ${japaneseTitle} ${originalTitle} piano`);
    window.open(`https://www.youtube.com/results?search_query=${query}`, "_blank", "noopener,noreferrer");
  });
  return article;
}

function renderCollection(elementId, tracks) {
  const list = document.getElementById(elementId);
  tracks.forEach((track, index) => list.appendChild(createTrack(track, index)));
}

renderCollection("famous-list", collections.famous);
renderCollection("deep-list", collections.deep);
