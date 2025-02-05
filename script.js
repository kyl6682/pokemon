const pokemonDiv = document.getElementById("pokemon");
const drawBtn = document.getElementById("draw");
document.getElementById("reset");

let currentPokemon = null;

// 포켓몬 데이터 가져오기
async function fetchPokemonData() {
    // 1 - 50 까지 난수 생성
    const index = Math.floor(Math.random() * 50) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`);
    const pokemonData = await response.json();

    console.log("API 데이터 확인:", pokemonData); // 제대로 불러왔는지 확인

    return {
        name: pokemonData.forms?.[0]?.name || "이름 없음", 
        img: pokemonData.sprites?.front_default || "#" 
        // '?' 옵셔널 체이닝 : pokemonData.forms가 존재하면 [0]으로 접근하고, 그렇지 않으면 undefined를 반환

    };
}

// 포켓몬 화면에 표시
function drawPokemon(pokemon) {
    pokemonDiv.innerHTML = ""; // 기존 포켓몬 초기화

    const pokemonImg = document.createElement("img");
    pokemonImg.classList.add("pokemon-image");
    pokemonImg.src = pokemon.img;
    pokemonImg.alt = pokemon.name;

    const pokemonName = document.createElement("h2");
    pokemonName.classList.add("pokemon-name");
    pokemonName.textContent = pokemon.name;

    // 이미지 로딩 성공 시
    pokemonImg.onload = function () {
        console.log("이미지 로딩 성공:", pokemonImg.src);
        pokemonDiv.appendChild(pokemonImg);
        pokemonDiv.appendChild(pokemonName);
    };

    // 이미지 로딩 실패 시 대체 이미지 표시
    pokemonImg.onerror = function () {
        console.error("이미지 로딩 실패:", pokemonImg.src);
        pokemonImg.src = "#";
        pokemonDiv.appendChild(pokemonImg);
        pokemonDiv.appendChild(pokemonName);
    };
}

// 포켓몬 뽑기 버튼
drawBtn.addEventListener("click", async (e) => {
    if (currentPokemon) {
        console.log("이미 뽑은 포켓몬입니다.");
        return;
    }

    currentPokemon = await fetchPokemonData(); // API 데이터 가져오기
    drawPokemon(currentPokemon);               // 화면에 표시
});

// 다시 뽑기 버튼
resetBtn.addEventListener("click", (e) => {
    currentPokemon = null; // 현재 포켓몬 초기화
    pokemonDiv.innerHTML = "<img class='monster-ball' src='/images/monster-ball.png'>"; // 화면 초기화
    console.log("다시 뽑기 준비 완료");
});
