// PDF 55쪽 전체 검토 후 정리한 프로젝트 데이터입니다.
// 새 프로젝트는 배열에 고유 id와 내용을 추가하면 목록과 상세 페이지에 반영됩니다.
// sourcePages: PDF의 실제 쪽 번호. PDF에 없는 내용은 빈 배열로 두거나 생략하세요.
const portfolioData = [
 {
  id:1, title:'AI와 같이 하는 할리갈리', category:'게임 · 협업', period:'2025.05.26 — 2025.05.30', sourcePages:'5–10',
  subtitle:'혼자서도 함께하는 재미, 컴퓨터 AI와 즐기는 카드 게임.',
  description:['사용자가 컴퓨터 AI와 함께 할리갈리를 즐길 수 있도록 만든 프로그램입니다. 카드의 숫자를 확인하고 같은 숫자가 등장했을 때 종 버튼을 누르는 게임 로직을 구현했습니다.'],
  motivation:['여러 명이 함께 즐기는 할리갈리를 혼자 있을 때도 재미있게 할 수 없을까 하는 생각에서 시작했습니다. 컴퓨터 AI를 상대 플레이어로 두어 혼자서도 게임을 즐길 수 있도록 기획했습니다.'],
  role:'프론트엔드 및 JavaScript 개발',
  activities:['프론트엔드와 JavaScript 개발을 담당했습니다.','팀원들과 코드를 함께 작성하고 의견을 나누며 게임을 만들었습니다.'],
  technologies:['HTML','JavaScript','Python','CSS'], tools:['VS Code'],
  features:[{title:'카드 셔플과 분배',text:'게임 시작 시 카드를 섞어 플레이어와 AI에게 분배합니다.'},{title:'플레이어와 AI의 차례',text:'플레이어의 카드와 종 반응을 확인하고 AI의 행동을 결정합니다.'},{title:'실수와 점수 처리',text:'플레이어와 AI의 실수를 확인하여 페널티와 카드 점수를 조정합니다.'},{title:'승패 판정',text:'카드 소진 여부를 확인하고 최종 점수와 승자를 결정합니다.'}],
  workflow:['게임 시작 → 카드 셔플 및 분배 → 플레이어·AI 차례 진행 → 카드와 종 반응 확인 → 실수에 따른 점수 조정 → 카드 소진 확인 → 승자 결정 또는 반복'],
  learned:['함께 코드를 작성하고 친구들과 의논하는 과정에서 협업 능력을 키웠습니다.'],
  reflection:['직접 만든 게임을 친구들과 즐길 수 있어 개발 과정뿐 아니라 완성 후에도 재미를 느꼈습니다. 팀원들과 협력하며 만드는 경험 자체가 소중하게 남았습니다.'],
  thumbnail:'assets/portfolio/01-game.jpg',
  images:[{file:'01-game',caption:'플레이어와 컴퓨터 AI가 대결하는 게임 화면',page:8},{file:'01-result',caption:'승리 결과 화면',page:8},{file:'01-code',caption:'게임 시작 화면',page:8},{file:'01-detail',caption:'카드 수 표시와 승패 판정 등을 처리하는 코드',page:8},{file:'01-flow',caption:'카드 분배부터 승자 결정까지의 게임 흐름도',page:9,type:'diagram'}]
 },
 {
  id:2, title:'보이스피싱 체험 시뮬레이터', category:'AI · 교육', period:'2025.07.08 — 2025.09.12', sourcePages:'11–17',
  subtitle:'실제 통화처럼 체험하며 배우는 보이스피싱 대응 교육.',
  description:['웹에서 실제 전화를 받는 상황을 경험할 수 있는 교육용 서비스입니다. WebRTC 기반 통화로 사기 전화와 비슷한 압박 상황을 체험하고, 사용자의 대응 과정을 실시간으로 분석하도록 설계했습니다.','실제 사례를 참고한 시나리오를 바탕으로 고령층과 학생 등 다양한 사용자가 직접 대응하며 배울 수 있도록 했습니다. 반복 체험으로 실수 패턴을 확인하고, 체험 후에는 피드백과 대응 가이드를 제공합니다.'],
  motivation:['보이스피싱 수법은 지능화되고 있지만 직접 대응 방법을 경험할 수 있는 교육은 충분하지 않다고 생각했습니다. 강의식 교육의 낮은 몰입감과 실전 활용의 어려움을 보완하기 위해 누구나 웹에서 상황을 체험하며 학습하는 서비스를 기획했습니다.'],
  role:'음성 처리 기술 통합 · AI 학습 데이터 구축 · 발표',
  activities:['음성 처리 기술 통합과 AI 학습 데이터 구축을 담당했습니다.','대회 발표를 맡았습니다.','친구들과 아이디어를 고민하고 ESG 선생님의 도움을 받아 기획과 개발 방향을 다듬었습니다.'],
  technologies:['HTML','JavaScript','Python','CSS','WebRTC'], tools:['VS Code'],
  features:[{title:'실제 사례 기반 시나리오',text:'사기 전화와 비슷한 상황에 사용자가 직접 대응하며 학습합니다.'},{title:'웹 음성 통화',text:'WebRTC 기반 통화를 통해 상황에 몰입할 수 있도록 구성했습니다.'},{title:'위험 판단',text:'사용자 입력을 받아 보이스피싱 위험 여부를 판단하고 경고 또는 안전 반응에 따른 메시지를 제공합니다.'},{title:'피드백과 대응 가이드',text:'반복 시뮬레이션으로 실수 패턴을 살펴보고, 체험 후 대응 방법을 안내합니다.'}],
  workflow:['시작 → AI의 시나리오 기반 메시지 → 사용자 입력 → 위험 여부 판단 → 위험 시 경고 후 종료 / 안전하게 반응하면 성공 메시지 후 종료'],
  learned:['아이디어가 막힐 때 팀원들과 함께 고민하고 선생님의 조언을 받아 방향을 개선하는 경험을 했습니다.'],
  reflection:['첫 대회여서 더욱 열심히 준비했던 프로젝트입니다. 처음에는 아이디어를 정하는 데 어려움이 있었지만 도움을 받아 더 나은 방향을 찾았고, 앞으로 다른 대회에도 도전하고 싶다는 생각을 하게 되었습니다.'],
  achievements:[{title:'ESG 대회 본선 진출',source:'PDF 3쪽의 프로젝트 경험 및 경력 표기'}],
  thumbnail:'assets/portfolio/02-presentation.jpg',
  images:[{file:'02-presentation',caption:'보이스피싱 체험 시뮬레이터 발표 현장',page:15},{file:'02-flow',caption:'시나리오 전송과 사용자 대응에 따른 위험 판단 흐름도',page:16,type:'diagram'}]
 },
 {
  id:3, title:'일상생활 의뢰 사이트', category:'웹 서비스 · 팀 리딩', period:'2025.10.30 — 2025.11.04', sourcePages:'18–23',
  subtitle:'일상 속 필요한 도움을 간편하고 믿을 수 있게 연결하는 플랫폼.',
  description:['일상생활에서 필요한 도움을 간편하게 요청하고 적합한 수행자를 찾을 수 있도록 설계한 웹 플랫폼입니다. 간단한 등록과 카테고리 선택을 통해 의뢰를 연결하고, 회원 프로필과 평점으로 신뢰성을 확보하고자 했습니다.','의뢰 진행 과정은 실시간 알림과 소통 기능으로 확인하며, 관리자는 플랫폼 운영과 문제 대응을 지원하는 구조입니다.'],
  motivation:['도움이 필요할 때 SNS나 지인에게 의존하면 시간이 지연되거나 신뢰성을 확인하기 어렵다는 점에서 출발했습니다. 누구나 쉽고 빠르게 의뢰를 요청하고 수행할 수 있는 시스템을 만들고자 했습니다.'],
  role:'팀장 · 총괄 개발자',
  activities:['팀장과 총괄 개발자 역할을 맡았습니다.','팀원들과 문제를 분석하고 해결책을 구현했습니다.','Supabase와 GitHub를 처음 배우고 프로젝트에 적용했습니다.'],
  technologies:['HTML','JavaScript','Python','CSS','Supabase'], tools:['VS Code','GitHub'],
  features:[{title:'의뢰 등록과 카테고리',text:'간단한 등록 절차와 카테고리 선택으로 필요한 도움을 요청합니다.'},{title:'프로필과 평점',text:'회원 프로필과 평점 시스템으로 의뢰 상대의 신뢰성을 확인하도록 설계했습니다.'},{title:'진행 상황과 소통',text:'실시간 알림과 소통 기능을 통해 의뢰 과정을 투명하게 관리합니다.'},{title:'운영 관리',text:'관리자가 플랫폼 운영과 문제 대응을 지원합니다.'}],
  learned:['Supabase와 GitHub를 처음 사용하며 새로운 도구를 배우고 실제 개발에 적용했습니다.','팀원들과 협력해 문제를 분석하고 해결책을 구현하며 협업과 개발 역량을 키웠습니다.'],
  improvements:[{title:'AI 기반 추천과 검증',text:'향후 AI 추천 및 검증 시스템을 도입해 매칭 정확도를 높이는 것을 목표로 했습니다.'},{title:'서비스 확장',text:'결제 기능 통합, 지역 기반 서비스 확대와 기업 협업으로 편의성과 확장성을 높이고자 했습니다.'}],
  reflection:['새로운 도구를 처음 접하고 적용하는 과정이 배움으로 이어졌습니다. 팀원들과 함께 문제를 해결하면서 개발 능력과 협업 역량을 키울 수 있었습니다.'],
  thumbnail:'assets/portfolio/03-dashboard.jpg',
  images:[{file:'03-dashboard',caption:'의뢰 목록과 카테고리를 확인하는 화면',page:22},{file:'03-request',caption:'의뢰 내용을 등록하는 화면',page:22}]
 },
 {
  id:4, title:'요청사항 입력 키오스크', category:'UI · 접근성', period:'2025.11.06', sourcePages:'24–29',
  subtitle:'텍스트와 음성으로 세부 요청사항을 전하는 주문 경험.',
  description:['KFC 키오스크의 주문 편의성을 개선하기 위해 진행한 프로젝트입니다. 고객이 텍스트나 음성으로 요청사항을 입력하고 수정·삭제할 수 있도록 구현했습니다.','메뉴 선택부터 결제와 주문 완료까지 음성 안내와 시각·청각적 알림을 제공하여 고객 맞춤형 서비스와 접근성을 높이고자 했습니다.'],
  motivation:['기존 키오스크에서는 세부 요청사항을 직접 입력하기 어려워 직원의 도움이 필요한 경우가 있었습니다. 고객이 원하는 요청을 쉽게 전달하고, 음성 안내까지 받을 수 있는 맞춤형 키오스크를 만들고자 했습니다.'],
  role:'총괄 개발자',
  activities:['총괄 개발자 역할을 담당했습니다.','팀원들과 협업하며 사용자 불편을 분석하고 텍스트·음성 입력을 활용한 주문 기능을 구현했습니다.'],
  technologies:['HTML','JavaScript','Python','CSS'], tools:['VS Code','GitHub'],
  features:[{title:'메뉴 선택과 주문',text:'메뉴를 고르고 결제와 주문 완료까지 이어지는 과정을 구성했습니다.'},{title:'텍스트·음성 요청사항',text:'고객이 세부 요청사항을 텍스트나 음성으로 입력할 수 있습니다.'},{title:'요청 수정과 삭제',text:'입력한 요청사항을 주문 과정에서 수정하거나 삭제할 수 있습니다.'},{title:'접근성을 위한 안내',text:'음성 안내와 시각·청각적 알림을 제공해 주문 과정을 돕습니다.'}],
  learned:['텍스트와 음성 입력을 도입하며 고객 경험과 접근성의 중요성을 배웠습니다.','기능 구현뿐 아니라 사용자의 입장에서 서비스를 설계하는 것이 큰 차이를 만든다는 것을 경험했습니다.'],
  reflection:['사용자가 편하게 주문할 수 있도록 작은 불편을 살피는 일이 중요하다는 것을 느꼈습니다. 팀원들과 문제를 분석하고 협업하는 과정에서도 많은 것을 배웠습니다.'],
  thumbnail:'assets/portfolio/04-menu.jpg',
  images:[{file:'04-menu',caption:'메뉴 선택과 요청사항 입력 화면',page:28},{file:'04-payment',caption:'결제 수단을 선택하는 화면',page:28},{file:'04-summary',caption:'주문 내역을 확인하는 화면',page:28}]
 },
 {
  id:5, title:'AI 영화·드라마 촬영지 추천', category:'AI · 위치 탐색', period:'2026년', periodNote:'PDF에 정확한 시작일과 종료일이 기재되어 있지 않습니다.', sourcePages:'30–36',
  subtitle:'좋아하는 작품 속 장소를 AI와 지도로 찾아보는 서비스.',
  description:['영화·드라마 촬영지와 작품 정보를 찾기 위해 여러 사이트를 검색해야 하는 불편을 줄이고자 개발했습니다. 원하는 지역을 선택하면 주변에서 촬영된 영화·드라마의 장소를 확인할 수 있습니다.','특정 작품을 검색하면 AI가 작품 정보와 촬영 장면 정보를 제공하며, 지도 시각화로 촬영지 위치를 직관적으로 확인하도록 구현했습니다. 정보 탐색의 편의성을 높이고 촬영지 관광과 지역 활성화에 기여하는 것이 목표입니다.'],
  motivation:['영화·드라마 촬영지를 직접 방문하는 사람이 늘어나지만 작품과 장소 정보를 따로 검색해야 하는 불편이 있었습니다. AI 추천과 지도 정보를 한곳에서 제공해 정보 탐색 시간을 줄이고 방문 편의성을 높이고자 했습니다.'],
  role:'팀장 · 백엔드 개발',
  activities:['팀장으로 참여하며 백엔드 제작을 담당했습니다.','기능 구현 중 발생한 어려움을 팀원들과 협력해 해결했습니다.'],
  technologies:['Java'], tools:['VS Code','GitHub','Render'],
  features:[{title:'지역별 촬영지 탐색',text:'원하는 지역을 선택해 주변 영화·드라마 촬영 장소를 확인합니다.'},{title:'작품 검색과 AI 정보',text:'특정 작품을 검색하면 작품 정보와 촬영 장면에 관한 정보를 제공합니다.'},{title:'지도 시각화',text:'촬영지 위치를 지도에서 직관적으로 확인하도록 구성했습니다.'}],
  learned:['AI로 정보를 수집하고 사용자에게 필요한 형태로 제공하는 방법을 배웠습니다.','백엔드 기능 구현 과정에서 문제를 함께 해결하며 역할 분담과 소통의 중요성을 느꼈습니다.'],
  reflection:['다양한 기술을 활용해 실생활의 불편을 해결하는 서비스를 계속 만들어 보고 싶다는 생각을 하게 되었습니다. 혼자 해결하기 어려운 문제도 팀원들과 협력하면 풀어갈 수 있음을 경험했습니다.'],
  thumbnail:'assets/portfolio/05-search.jpg',
  images:[{file:'05-search',caption:'영화·드라마 작품과 촬영지를 검색하는 실제 화면',page:35},{file:'05-map',caption:'촬영지 위치를 지도에서 확인하는 화면',page:35},{file:'05-backend',caption:'백엔드 개발 코드',page:34},{file:'05-frontend',caption:'프론트엔드 개발 코드',page:34},{file:'05-deploy',caption:'서비스 배포 화면',page:34}]
 },
 {
  id:6, title:'FDY 택배 파손 AI 인식 시스템', category:'AI · 스마트 배송', period:'2026년 — 2026.09.16', periodNote:'PDF에 시작 월·일이 기재되어 있지 않습니다.', sourcePages:'37–44',
  subtitle:'택배 파손을 인식하고 배송 과정의 불편을 줄이는 스마트 서비스.',
  description:['YOLOv11으로 택배 파손 상태를 인식해 데이터를 저장하고, 배송 과정을 효율적으로 관리하는 서비스입니다. 배송기사에게는 배송 순서 자동 추천과 간편한 배송 완료 기능을 제공하고, 소비자는 앱에서 배송 현황과 파손 여부를 확인할 수 있습니다.'],
  motivation:['택배 파손이 발생해도 정확한 파손 시점을 확인하기 어려워 책임 분쟁으로 이어질 수 있습니다. 실제 택배 현장 방문과 설문조사에서 이러한 문제와 배송기사의 업무 부담을 확인하고 AI 기반 스마트 택배 서비스를 기획했습니다.'],
  role:'소비자용 앱 프론트엔드 개발 · 프로젝트 포스터 제작',
  roleNote:'PDF 42쪽의 상세 역할을 기준으로 정리했습니다. 38쪽 개요에는 소비자·택배기사 앱 개발, AI 택배 상자 바코드 인식, 영상 편집 및 포스터 제작도 표기되어 있습니다.',
  activities:['로젠택배 현장 방문과 인터뷰로 배송 과정의 문제를 조사했습니다.','Android Studio와 Java를 활용해 소비자용 앱의 배송 조회·파손 정보 확인 화면을 개발했습니다.','팀원들의 피드백을 반영해 화면을 수정했습니다.','프로젝트의 목적과 핵심 기능을 전달하는 포스터를 제작했습니다.'],
  technologies:['Python','Java','Kotlin','YOLOv11','Supabase','데이터베이스','Git'], tools:['Android Studio','VS Code','GitHub'],
  features:[{title:'택배 파손 AI 인식',text:'YOLOv11으로 파손 상태를 자동 판별하고 인식 정보를 저장합니다.'},{title:'배송 순서 추천',text:'배송기사에게 배송 순서를 자동 추천해 업무를 돕습니다.'},{title:'간편한 배송 완료',text:'배송기사 앱에서 배송 업무와 완료 처리를 간편하게 진행합니다.'},{title:'소비자 배송 조회',text:'소비자 앱에서 배송 현황과 택배 파손 여부를 확인합니다.'}],
  learned:['대한상공회의소 미래인재 훈련에서 Python, YOLO, 데이터베이스와 Git을 배웠습니다.','AI 모델을 학습시키고 이미지 데이터를 분석하는 방법, 정보를 저장하고 관리하는 과정을 익혔습니다.','Android Studio·Java로 앱을 개발하고 백엔드와 연동했습니다. GitHub로 코드를 공유하고 버전을 관리했습니다.'],
  limitations:[{title:'AI 인식 정확도의 한계',text:'촬영 각도, 조명과 택배 상자의 종류에 따라 파손 인식 정확도가 달라질 수 있습니다.'},{title:'실제 적용 경험 부족',text:'여러 배송 환경에서의 테스트가 충분하지 않아 실제 물류 현장에 적용하기 위한 추가 검증이 필요합니다.'}],
  improvements:[{title:'다양한 데이터 추가 학습',text:'여러 환경에서 촬영한 택배 이미지로 추가 학습해 파손 인식 정확도를 높이고자 합니다.'},{title:'앱 기능과 사용성 개선',text:'사용자 피드백으로 화면과 기능을 보완하고 실제 배송 환경의 테스트를 확대하고자 합니다.'}],
  reflection:['서로 부족한 부분을 돕고 어려움을 함께 해결하며 협업의 중요성을 느꼈습니다. 프로젝트를 완성하고 대상을 받으면서 개발에 대한 자신감을 얻었고, 앞으로도 사람들에게 도움이 되는 서비스를 함께 만들고 싶습니다.'],
  achievements:[{title:'2026 직업계고 K-TECH IDEA 챌린지',distinction:'고용노동부 장관상 (대상)',source:'PDF 44쪽'}],
  thumbnail:'assets/portfolio/06-poster.jpg',
  images:[{file:'06-consumer',caption:'소비자 앱 화면과 스마트 택배 서비스 포스터',page:42},{file:'06-route',caption:'배송 경로를 확인하는 앱 화면',page:41},{file:'06-driver',caption:'현재 배송 순서를 확인하는 앱 화면',page:41},{file:'06-flow',caption:'AI 파손 인식과 백엔드·배송기사·소비자 앱 구성도',page:40,type:'diagram'},{file:'06-field',caption:'택배 현장 방문 사진',page:39},{file:'06-survey',caption:'배송기사 업무 관련 설문 자료',page:39},{file:'06-poster',caption:'직접 제작한 프로젝트 포스터',page:42},{file:'06-limits',caption:'PDF에 정리한 한계점과 개선 방향',page:43,type:'diagram'},{file:'06-award',caption:'K-TECH IDEA 챌린지 대상 수상 기념 사진',page:44}]
 },
 {
  id:7, title:'작업자 안전 관리 시스템', category:'하드웨어 · 산업 안전', period:'2026.08.03 — 2026.10.13', sourcePages:'45–54',
  subtitle:'작업자의 심박수와 움직임을 살피고 위험을 알리는 안전 시스템.',
  description:['작업자의 심박수와 움직임을 실시간으로 감지해 낙상이나 이상 징후를 파악하고 작업자와 관리자에게 알림을 전달하는 시스템입니다. 심박수·기울기 측정 데이터를 처리하고 데이터베이스에 추가하여 관리자 사이트에서 실시간 값으로 확인하도록 구성했습니다.'],
  motivation:['실제 산업 현장을 방문하면서 예상보다 강한 열기와 힘든 작업 환경을 경험했습니다. 의식을 잃거나 쓰러지는 상황에서는 신속한 대응이 생명과 연결될 수 있다고 느껴 위험을 감지하고 알리는 시스템을 개발하게 되었습니다.'],
  role:'손목·헬멧 하드웨어 연결 및 제작 보조 · 관리자 페이지 기초 개발 · 영상 편집',
  activities:['강남 교육에서 아두이노 센서 연결, 라즈베리파이 사용과 파이썬 기초를 배우고 장치 제어를 실습했습니다.','현대제철과 한국중부발전 코미포 에너지움을 방문해 산업 현장의 작업 환경을 살펴보았습니다.','부품 연결과 납땜을 보조하고 Arduino IDE로 센서 동작과 데이터 측정 상태를 테스트했습니다.','손목에 착용할 수 있도록 크기와 구조를 고려해 설계도를 구체화했습니다.','친구들과 역할을 나누고 멘토링 선생님과 설계·제작 방향을 조율했습니다.','손목·헬멧 하드웨어의 납땜 후 연결, 관리자 페이지의 기초 틀 개발과 영상 편집을 맡았습니다.'],
  technologies:['HTML','Python','Arduino','Raspberry Pi','데이터베이스'], tools:['Arduino IDE','VS Code','GitHub'],
  features:[{title:'심박수와 기울기 측정',text:'작업자의 심박 상태와 움직임을 센서로 측정합니다.'},{title:'데이터 처리와 저장',text:'결측치와 이상치를 처리하고 측정 데이터를 데이터베이스에 추가합니다.'},{title:'관리자 모니터링',text:'관리자 사이트에서 실시간 측정 값과 작업자 상태를 확인합니다.'},{title:'위험 감지와 알림',text:'낙상과 이상 징후 등 위험 상황을 파악해 작업자와 관리자에게 알림을 전달합니다.'}],
  workflow:['심박수·기울기 측정 → 결측치·이상치 처리 → 데이터베이스 저장 → 관리자 사이트에 실시간 값 출력'],
  learned:['아두이노·라즈베리파이와 파이썬으로 하드웨어를 제어하고 소프트웨어와 연결하는 방법을 배웠습니다.','처음 납땜 작업에 참여하며 하드웨어의 작동 원리와 제작 과정을 익혔습니다.','직접 현장을 방문하며 작업자의 어려움을 이해하고 실습의 중요성을 느꼈습니다.'],
  limitations:[{title:'센서 측정 오차',text:'센서의 측정 오차나 착용 상태에 따라 위험 상황을 정확하게 감지하는 데 한계가 있습니다.'},{title:'고온 환경에서의 안정성',text:'실제 산업 현장의 고온 환경에서도 안정적으로 작동하는지 추가 검증이 필요합니다.'}],
  improvements:[{title:'센서 정확도 향상',text:'측정 정확도를 높이고 다양한 작업 환경에서 반복 테스트해 위험 감지 신뢰성을 개선하고자 합니다.'},{title:'내구성과 착용감 개선',text:'고온과 땀에 강한 소재를 활용하고 착용감을 보완해 실제 산업 현장에서 안정적으로 사용할 수 있도록 발전시키고자 합니다.'}],
  reflection:['산업 안전은 단순한 사고 예방을 넘어 작업자의 생명과 연결된 문제라는 것을 느꼈습니다. 현장의 어려움을 직접 보고, 시스템의 실용성과 정확성을 고려하는 것이 중요하다고 생각했습니다. 배운 기술로 사람들의 안전에 기여할 수 있다는 점에서 보람을 느꼈습니다.'],
  thumbnail:'assets/portfolio/07-admin.jpg',
  images:[{file:'07-admin',caption:'작업자 상태를 확인하는 관리자 모니터링 화면',page:49},{file:'07-hardware',caption:'센서와 부품을 연결한 하드웨어',page:49},{file:'07-flow',caption:'센서 측정부터 관리자 실시간 출력까지의 시스템 순서도',page:50,type:'diagram'},{file:'07-heart',caption:'심박수 측정 장치',page:50},{file:'07-tilt',caption:'기울기 측정 장치',page:50},{file:'07-soldering',caption:'납땜과 부품 연결 작업',page:51},{file:'07-assembly',caption:'하드웨어 제작 과정',page:51},{file:'07-training',caption:'교육 중 개발 실습 모습',page:47},{file:'07-team',caption:'교육 참여 기념 단체 사진',page:47},{file:'07-steel',caption:'현대제철 산업 현장 탐방',page:48},{file:'07-komipo',caption:'한국중부발전 코미포 에너지움 탐방',page:48},{file:'07-scenario',caption:'위험 감지와 관리자 확인·대응 과정을 보여주는 예시 상황',page:53,type:'diagram'},{file:'07-limits',caption:'센서 측정과 현장 적용의 한계 및 개선 방향',page:52,type:'diagram'}]
 }
];

// Original image dimensions for stable layouts and responsive rendering.
const portfolioImageMeta = {"01-game":{"width":955,"height":534,"page":8},"01-result":{"width":761,"height":384,"page":8},"01-code":{"width":921,"height":500,"page":8},"01-detail":{"width":487,"height":443,"page":8},"01-flow":{"width":750,"height":1185,"page":9},"02-presentation":{"width":960,"height":540,"page":15},"02-flow":{"width":825,"height":1201,"page":16},"03-dashboard":{"width":1116,"height":611,"page":22},"03-request":{"width":999,"height":728,"page":22},"04-menu":{"width":1152,"height":648,"page":28},"04-payment":{"width":480,"height":864,"page":28},"04-summary":{"width":641,"height":826,"page":28},"05-backend":{"width":497,"height":457,"page":34},"05-frontend":{"width":591,"height":451,"page":34},"05-deploy":{"width":949,"height":467,"page":34},"05-search":{"width":1069,"height":597,"page":35},"05-map":{"width":948,"height":532,"page":35},"06-survey":{"width":922,"height":615,"page":39},"06-field":{"width":1200,"height":900,"page":39},"06-flow":{"width":1536,"height":1024,"page":40},"06-route":{"width":451,"height":872,"page":41},"06-driver":{"width":960,"height":540,"page":41},"06-poster":{"width":536,"height":756,"page":42},"06-consumer":{"width":896,"height":920,"page":42},"06-limits":{"width":1750,"height":899,"page":43},"06-award":{"width":864,"height":576,"page":44},"07-training":{"width":768,"height":576,"page":47},"07-team":{"width":667,"height":563,"page":47},"07-steel":{"width":896,"height":465,"page":48},"07-komipo":{"width":768,"height":432,"page":48},"07-admin":{"width":951,"height":540,"page":49},"07-hardware":{"width":538,"height":717,"page":49},"07-heart":{"width":487,"height":287,"page":50},"07-tilt":{"width":524,"height":302,"page":50},"07-soldering":{"width":538,"height":717,"page":51},"07-assembly":{"width":538,"height":717,"page":51},"07-limits":{"width":1668,"height":943,"page":52},"07-flow":{"width":2093,"height":765,"page":50},"07-scenario":{"width":1988,"height":1020,"page":53}};
