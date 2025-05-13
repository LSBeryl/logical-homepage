const reviews = [
  {
    author: {
      nickname: "Gjgjwldn",
    },
    body: "수업 시간 외에도 자습할 수 있는 공간을 마련해주셔서 공부하기 좋고 선생님들이 다들 친절하셔서 질문하기 편해요 실력이 많이 는 게 느껴져요!!",
  },
  {
    author: {
      nickname: "gks****",
    },
    body: "로지컬 수학학원은 분위기가 차분해서 집중하기 좋아요.\n간식으로 과자도 준비돼 있어서 공부하다가 당 보충하기 딱 좋아요.\n선생님이 설명을 쉽게 잘해주셔서 이해가 쏙쏙 됩니다.\n시간표가 유동적이라 제 일정에 맞춰 수업을 들을 수 있어서 편리해요.\n전체적으로 만족도 높은 학원이라 추천합니다!",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNTA0MThfMTIw/MDAxNzQ0OTc0OTQzNDg0.YhMPHXSWbEzsrvdcr2dF2pczJc_myKoCz091yOPhuigg.-ZrjYCkG7ONwbY9K7QYSZicpW5w24ZjV_0S3L45l6egg.JPEG/2F1A21B7-7E48-43EE-9DE4-C12C0BF2BC0A.jpeg",
  },
  {
    author: {
      nickname: "ㄹㄹㄷ",
    },
    body: "로지컬 수학학원 진짜 추천합니다!  \n개념 설명이 엄청 꼼꼼해서 이해가 쏙쏙 돼요.  \n문제풀이 요령도 알려줘서 실력이 확 느는 게 보여요.  \n학생 한 명 한 명 신경 써주는 게 느껴져서 믿음 가요.  \n성적 오르고 나니까 공부에 자신감도 생겼어요.  \n수학 때문에 고민이라면 로지컬 수학학원 꼭 가보세요!",
  },
  {
    author: {
      nickname: "ans****",
    },
    body: "정말 만족스러운 수학학원입니다!\n선생님께서 개념 설명을 아주 꼼꼼하게 해주셔서 이해가 쏙쏙 됩니다. 문제풀이도 단순히 정답만 알려주시는 게 아니라, 왜 그렇게 푸는지 논리적으로 설명해주셔서 응용력까지 키울 수 있었어요. 수업 분위기도 집중이 잘 되고 질문하기 편해서 자신감이 생겼습니다. 성적도 눈에 띄게 올랐어요! 수학에 어려움을 느끼는 분들께 강력 추천합니다.\n👍👍👍",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNTA0MThfMTcg/MDAxNzQ0OTc2ODQzMjYy.2WX9aJkjP8Go7jVWMjgNo_Exuvo27hMXrX5oDvpEICgg.hj2Dfun8Gb6jetFZMneLXlOXRuqMRM1EeulqoQECTKwg.JPEG/1743506735117-1.jpg.jpg",
  },
  {
    author: {
      nickname: "dae****",
    },
    body: "다니고 있는데 1대1 식으로 해서 더 배우기 편하다고 느껐다. 수업시간에도 소란없이 집중을 잘 할수 있는 환경이 매우 마음에 들었다.",
  },
  {
    author: {
      nickname: "ohy****",
    },
    body: "1대 1 수업으로 맞춤형 지도가 가능해서 눈치 보지 않고 질문할 수 있어 좋아요!! 과외 학원 인강의 장점을 합쳐논 학원이라 단점이 없는 학원인거 같아요! 그리고 인강으로 개념학습을 할 수 있어 수1 수2 기초를 빠르고 호율적이게 학습할 수 있어 좋았어요!!",
  },
  {
    author: {
      nickname: "han****",
    },
    body: "선생님들이 학생한테 맞춰서 학습방법을 잘 알려주시고 친절해요 그리고 학원이 깨끗하고 좋아요!👍🏻👏🏻👏🏻",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNTAzMjBfMTAz/MDAxNzQyNDc2MjY0Mjkx.GMj7la4pr1Mj7ogU_GuCZ4Y5dFY1P9ntyUUoXV3PMHog.bipKrhENIpkU3auFPPSRqpOiw0vxyhLLfwu83IisYhMg.JPEG/DDABE55E-FE06-45C0-95DD-F16DA71CC84B.jpeg",
  },
  {
    author: {
      nickname: "ㄹㄹㄷ",
    },
    body: "이 학원 진짜 좋습니다. 부족한 학생도 선생님이 끝까지 챙겨주시고 유형별로 많은 문제도 주시요. 수업외에도 간식이나 필요한 물품이 항상 구비되어있어서 좋아요",
  },
  {
    author: {
      nickname: "min****",
    },
    body: "개개인의 레벨에 따라 맞춤 커리큘럼을 진행할 수 있다는 점에서 좋았어요. 👍👍",
  },
  {
    author: {
      nickname: "희아닙니다",
    },
    body: "선생님들이 굉장히 친절하고 학생 한 명 한 명을 꼼꼼하게 지도해 주시는 모습이 인상적이었습니다. 😊",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNTAyMTZfMTkg/MDAxNzM5Njk5ODQ4NDYy.Y5RKGnqkx62hdrNf6mDPkc8kBesCyq5VeqmJU6RCfZUg.8WpuMLTyZjQyASM09TC23bkRON4PM3n6Z_6L1HbWB2Ug.JPEG/7BA0CB71-E239-4E31-ACC0-C90FC4CA5943.jpeg",
  },
  {
    author: {
      nickname: "gks****",
    },
    body: "로지컬 수학학원은 분위기가 차분해서 집중하기 좋아요.\n간식으로 과자도 준비돼 있어서 공부하다가 당 보충하기 딱 좋아요.\n선생님이 설명을 쉽게 잘해주셔서 이해가 쏙쏙 됩니다.\n시간표가 유동적이라 제 일정에 맞춰 수업을 들을 수 있어서 편리해요.\n전체적으로 만족도 높은 학원이라 추천합니다!",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNTA0MThfMTIw/MDAxNzQ0OTc0OTQzNDg0.YhMPHXSWbEzsrvdcr2dF2pczJc_myKoCz091yOPhuigg.-ZrjYCkG7ONwbY9K7QYSZicpW5w24ZjV_0S3L45l6egg.JPEG/2F1A21B7-7E48-43EE-9DE4-C12C0BF2BC0A.jpeg",
  },
  {
    author: {
      nickname: "ans****",
    },
    body: "정말 만족스러운 수학학원입니다!\n선생님께서 개념 설명을 아주 꼼꼼하게 해주셔서 이해가 쏙쏙 됩니다. 문제풀이도 단순히 정답만 알려주시는 게 아니라, 왜 그렇게 푸는지 논리적으로 설명해주셔서 응용력까지 키울 수 있었어요. 수업 분위기도 집중이 잘 되고 질문하기 편해서 자신감이 생겼습니다. 성적도 눈에 띄게 올랐어요! 수학에 어려움을 느끼는 분들께 강력 추천합니다.\n👍👍👍",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNTA0MThfMTcg/MDAxNzQ0OTc2ODQzMjYy.2WX9aJkjP8Go7jVWMjgNo_Exuvo27hMXrX5oDvpEICgg.hj2Dfun8Gb6jetFZMneLXlOXRuqMRM1EeulqoQECTKwg.JPEG/1743506735117-1.jpg.jpg",
  },
  {
    author: {
      nickname: "han****",
    },
    body: "선생님들이 학생한테 맞춰서 학습방법을 잘 알려주시고 친절해요 그리고 학원이 깨끗하고 좋아요!👍🏻👏🏻👏🏻",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNTAzMjBfMTAz/MDAxNzQyNDc2MjY0Mjkx.GMj7la4pr1Mj7ogU_GuCZ4Y5dFY1P9ntyUUoXV3PMHog.bipKrhENIpkU3auFPPSRqpOiw0vxyhLLfwu83IisYhMg.JPEG/DDABE55E-FE06-45C0-95DD-F16DA71CC84B.jpeg",
  },
  {
    author: {
      nickname: "희아닙니다",
    },
    body: "선생님들이 굉장히 친절하고 학생 한 명 한 명을 꼼꼼하게 지도해 주시는 모습이 인상적이었습니다. 😊",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNTAyMTZfMTkg/MDAxNzM5Njk5ODQ4NDYy.Y5RKGnqkx62hdrNf6mDPkc8kBesCyq5VeqmJU6RCfZUg.8WpuMLTyZjQyASM09TC23bkRON4PM3n6Z_6L1HbWB2Ug.JPEG/7BA0CB71-E239-4E31-ACC0-C90FC4CA5943.jpeg",
  },
  {
    author: {
      nickname: "jenny 03037",
    },
    body: "매일매일 무엇을 공부해야 하는지 고민하는 게 가장 힘들었는데 진도에 맞춰서 개별로 스케쥴을 짜주셔서 더 효율적으로 공부할 수 있어요! \n1:1로 관리받는 느낌이 들어서 수학이 더 좋아졌어요😀 추천합니당!!",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNDExMTZfMjIz/MDAxNzMxNzQ5OTEyMzA1.10b9I0CoIpJYVgrITJbvvl6qh6wGKrBrerqMOqh4tzAg.dB-rzkIubKHLHUUoNseuHkJXvNgy24JAYfJyJFbvPq0g.JPEG/9CD3771D-1BB5-4BFE-BC36-49DCEEBB0963.jpeg",
  },
  {
    author: {
      nickname: "하동현66",
    },
    body: "시설이 매우 깔끔하고 좋아보여요. 선생님이 직접 붙어서 봐주시는 점이 매력인것 같네요.",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNDEwMjVfMTUx/MDAxNzI5ODUwOTA4MTU2.u2U_sDw5mNDf9fk0VSRoKNuqu6MZTcyijwJQZ2ZhBuQg.MuS13hogCJ8FyFWgt2YceS3a-MR0bOSR1nP9e51esIUg.JPEG/2007DFE1-F6A6-47DC-BAC0-E50D7361FF01.jpeg",
  },
  {
    author: {
      nickname: "eci****",
    },
    body: "이 학원의 가장 큰 장점이 개별 맞춤 숙제와 1대1 질의응답인데,\n숙제 관련해서는 선생님이 저의 상황에 맞추어 진도를 나갈 수 있게 해주셔서 좋았고, 1대1 질의응답은 제가 막힐 때마다 바로바로 뚫어주셔서 더욱 빠르게 성장할 수 있었습니다.",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNDEwMTZfOTgg/MDAxNzI5MDc5MjY0OTcw.c6X7DF5XjGPh-c2pPZ7kGXTOayaOUnfdJ8FDKlh9digg.s_yWyw1U7x6nv1X9uW5UPv15885jQqpRmQeZteahWtMg.JPEG/IMG_2214.jpeg",
  },
  {
    author: {
      nickname: "gwo****",
    },
    body: "같이 다니는 친구랑 실력차이가 나서 진도 못따라가면 어쩌지 걱정했는데 같은 수업 들어도 각자 진도가 있어서 자신감 떨어지지 않고 뭔가 퀘스트 깨가는 느낌이라 수학이 재밌어졌어요. 감사합니다 쌤~",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNDEwMTZfMTYy/MDAxNzI5MDYyODUxNDc2.JHUEUY8AfZD1nX5-vshdG7KDAwFByxrHDkmuKO9mkJIg.cW3vHamMgX0hKKxVQhOXvpDXy4E7Bxzw0PeJ8EfC79gg.JPEG/20241016_161339.jpg.jpg",
  },
  {
    author: {
      nickname: "gks****",
    },
    body: "다른 학원은 학원 수업시간때 수업을 듣고 문제풀이 하면서 개별적으로 질문할 시간이 없어서 실질적인 수학학습이 어려웠는데, 로지컬수학은 집에서 미리 영상을 듣고 온다면 학원에서는 모든 시간을 질문과 문제풀이에만 쓸 수 있어서 더 효율적인 학습이 가능했습니다.",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNDEwMTRfMzIg/MDAxNzI4OTA3NTY2Njk3.uMSe4rrv3da1bsAhpm_4KCjeqUv7RMkdWG92YXpobMog.IqKu2_myT1d6kbEScslfqMyUCxoiRsHSxT8Ct66OP5kg.JPEG/F997D02B-A3D2-4FF0-8B56-5B245B16096A.jpeg",
  },
  {
    author: {
      nickname: "밍채45",
    },
    body: "중학교 2학년 때 수학에 대한 기초가 거의 없었던 저를 3년 동안 지도해주며, 실력 향상과 함께 흥미까지 키워준 학원입니다. \n체계적인 커리큘럼은 물론, 개별 맞춤 수업을 통해 과외에서 얻을 수 있는 장점도 모두 갖추고 있어요. 다른 학원들과는 차별화된 시스템 덕분에, 수학 실력에 상관없이 누구나 만족할 수 있는 학원이라고 생각합니다. \n특히, 대표 강사님과 원장님께서 보여주시는 열정은 매번 저에게 큰 동기부여가 되었습니다. 고잔동에서 수학 학원을 고민 중이라면, 로지컬수학을 강력히 추천합니다!",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNDEwMTRfMjI4/MDAxNzI4OTA4MTcxODYy.9ASkfjZP-9Sf46lTrTRWrtKGFqO0M5GNigYWNMi8efsg.ZtbrXl7ArZysM58f4lOlNtoeQVnIV0XXj5ZRKOOqEH0g.JPEG/62C19547-D1BD-41EE-891F-9209E5FD71AD.jpeg",
  },
  {
    author: {
      nickname: "윰윰8081",
    },
    body: "수학 잘하는 친구 소개로 로지컬수학에 오게되었어요!\n쭉 대형학원만 다녔었는데 거기선 선생님과 1:1로 질문할 시간이 거의없었고, 수업 학생수가 많다보니 제가 모르는 부분을 제대로 짚고넘어가지 못해서 등급향상을 못했었어여 ㅠㅠ\n로지컬수학은 개인별 맞춤으로 지도해주시고 틀린문제를 확실하게 알기위해 바인더노트를 따로 작성해서 성적이 오를수밖에없는 커리큘럼이더라구요! ...",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNDEwMTNfMTY3/MDAxNzI4ODE2ODcyNTE3.tPZ3gNmcCuyPrPu7EZC8F_1V4lk4FRnj743hNf1dA2Ug.0NsV-ql5OPW7W9xfW1ETxsCg9ZeWmaogvM50b9x1tF0g.JPEG/B16B28F2-9B67-4DE3-BFA4-1650509112E8.jpeg",
  },
  {
    author: {
      nickname: "해롱이9037",
    },
    body: "로일쌤이 너무 열정적으로 잘 알려주시고, 1년간 수업받고 있는데 성적도 많이 올라서 너무 좋습니당~ 대만족이에요!! 다들 로지컬로 오세여~~",
    thumbnail:
      "https://pup-review-phinf.pstatic.net/MjAyNDEwMTFfMzAg/MDAxNzI4NjUzNzQxOTAw.13oByMUYcYDDJhkL_U5NLK_mGRowVawNGFY__gAOjScg.fnWUdbGmd-qk46f9zLogMv0fsJJwaWX2WtvA2Hil3sog.JPEG/46524936-FBB7-4D55-9A53-72A0667743FE.jpeg",
  },
];

export default reviews;
