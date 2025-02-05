# 🌟 오늘의 포켓몬 뽑기

### 🌟 프로젝트 개요

###### 오늘의 포켓몬 뽑기

DRAW 버튼을 클릭을 하면 랜덤으로 포켓몬이 생성, RESET 버튼을 통해 초기 화면으로 돌아감.

* DRAW! 버튼: 해당 버튼 클릭 시  포켓몬 API에서포켓몬 데이터를 가져와 표시

* RESET! 버튼: 초기의 화면으로 돌아감

* API 연결: PokeAPI를 통해 포켓몬  데이터를 가져오고 표시

파일 구조

```
/
└── index.html
└── style.css
└── script.js
└── /images
        └── pokemon-logo.png
        └── monster-ball.png
        └── genesis-village.png
```

* `index.html`: 기본 HTML 파일

* `style.css`: 프로젝트 스타일 파일

* `script.js`: API 통신, 포켓몬 뽑기 기능 구현

* `/images`: 이미지 폴더

사용한 API : [pokeApi](https://pokeapi.co/)

## 추후 업데이트 사항
* 진화 기능 : 선택된 포켓몬은 진화 버튼을 클릭하면 일정 확률로 진화가 가능
* 한글 버전 : 포켓몬의 이름을 한글로 출력

