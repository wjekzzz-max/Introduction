// 날짜와 연락처는 확인된 정보만 추가합니다. 한국어 문구는 ko 값을 편집하세요.
const siteData = {
  intro: {ko:'안녕하세요. 새로운 것을 배우고 직접 만들어 보는 것을 좋아하는 권정달입니다. 평소 인공지능과 프로그래밍에 관심이 많으며, 다양한 활동과 경험을 통해 새로운 도전을 이어가고 있습니다.',en:'I’m Kwon Jeongdal. I enjoy learning new things and making them myself. With an interest in AI and programming, I keep taking on new challenges through a variety of activities and experiences.'},
  values: [{ko:'도전',en:'Challenge'},{ko:'성장',en:'Growth'},{ko:'협력',en:'Collaboration'},{ko:'문제 해결',en:'Problem solving'}],
  skills: [{name:'Python',symbol:'Py',type:'LANGUAGE',color:'#e9c86b'},{name:'HTML / CSS',symbol:'</>',type:'WEB',color:'#ef997b'},{name:'JavaScript',symbol:'JS',type:'LANGUAGE',color:'#e7d473'},{name:'SQL',symbol:'DB',type:'DATABASE',color:'#84b7f6'},{name:'Arduino',symbol:'∞',type:'HARDWARE',color:'#6ac9bf'},{name:'YOLO',symbol:'◎',type:'AI / VISION',color:'#c1a0ed'},{name:'OpenCV',symbol:'◉',type:'COMPUTER VISION',color:'#8dcb9c'},{name:'GitHub',symbol:'git',type:'COLLABORATION',color:'#c6c8d5'},{name:'VS Code',symbol:'⌘',type:'EDITOR',color:'#79b6f0'}],
  experiences: [
    {image:'jend.webp',imageWidth:576,imageHeight:768,icon:'spark',category:'IDEA → REALITY',title:{ko:'AI 및 소프트웨어 개발 경험',en:'Exploring AI & software'},description:{ko:'인공지능과 프로그래밍을 활용한 다양한 개발 활동을 하며, 머릿속 아이디어를 실제 기능으로 구현하는 과정을 경험했습니다.',en:'Through development activities using AI and programming, I experienced turning ideas into working features.'},lesson:{ko:'문제를 발견하고 하나씩 해결해 나가는 과정 자체가 배움이 된다는 것을 느꼈습니다.',en:'I learned that finding problems and working through them is a valuable part of learning.'}},
    {image:'team.webp',imageWidth:576,imageHeight:768,icon:'people',category:'BETTER TOGETHER',title:{ko:'팀 프로젝트 및 협업 경험',en:'Creating together'},description:{ko:'팀원들과 아이디어를 구상하고 역할을 나누어 개발했습니다. 서로 다른 생각을 듣고 의견을 조율하는 과정을 함께했습니다.',en:'I worked with teammates to develop ideas, share responsibilities, and build together, listening to different perspectives along the way.'},lesson:{ko:'서로의 생각을 나누고 소통할 때, 혼자서는 찾기 어려운 답을 발견할 수 있었습니다.',en:'Sharing ideas and communicating helped us find answers that were harder to reach alone.'}},
    {image:'show.webp',imageWidth:1536,imageHeight:864,icon:'flag',category:'A STEP OUTSIDE',title:{ko:'대회 참가 경험',en:'Taking on new challenges'},description:{ko:'다양한 아이디어 및 기술 관련 대회에 참가하며 결과물을 준비하고 발표하는 경험을 쌓았습니다.',en:'By participating in idea and technology competitions, I gained experience preparing work and presenting it to others.'},lesson:{ko:'생각을 다른 사람에게 전하는 법을 배우고, 도전하는 과정에서 성장의 기회를 얻었습니다.',en:'I learned to communicate my ideas and found opportunities to grow through the challenge.'}},
    {image:'komipo.png',imageWidth:1536,imageHeight:864,icon:'building',category:'BEYOND THE CLASSROOM',title:{ko:'산업 현장 탐방 경험',en:'Learning beyond the classroom'},description:{ko:'현대제철 현장과 한국중부발전 관련 시설을 탐방하며 실제 산업 현장에서 기술이 활용되는 모습을 살펴보았습니다.',en:'Visiting Hyundai Steel and facilities related to Korea Midland Power gave me a look at how technology is used in industry.'},lesson:{ko:'교실에서 접한 기술이 현장과 어떻게 연결되는지 더 넓은 시선으로 바라보게 되었습니다.',en:'I gained a broader perspective on how classroom learning connects to the real world.'}},
    {image:'ken.webp',imageWidth:576,imageHeight:768,icon:'building',category:'EXHIBITION',title:{ko:'킨텍스 전시 경험'},description:{ko:'킨텍스 전시 현장을 경험하며, 평소 관심을 두던 기술과 아이디어를 교실 밖에서 접하는 시간을 가졌습니다.'},lesson:{ko:'전시 경험을 통해 관심 분야를 더 넓게 바라보고, 앞으로 배우고 싶은 것들을 생각해 보는 계기가 되었습니다.'}}
  ],
  awards:[
    {year:'2026',title:{ko:'2026 직업계고 K-TECH IDEA 챌린지',en:'2026 Vocational High School K-TECH IDEA Challenge'},distinction:{ko:'고용노동부 장관상 (대상)',en:'Minister of Employment and Labor Award (Grand Prize)'},image:'image.jpg',imageAlt:'K-TECH IDEA 챌린지 고용노동부 장관상 대상 수상 기념 단체 사진'},
    {title:{ko:'미래내일 일경험 대회'},distinction:{ko:'장려상'},image:'LL.png',imageWidth:397,imageHeight:529,imageAlt:'전자 부품을 납땜하며 작업하는 활동 사진',imageCaption:'직접 만들고 배우던 활동의 한 장면'}
  ],
  certifications:[{title:{ko:'ITQ 한글',en:'ITQ Hangul'},grade:{ko:'A등급',en:'Grade A'}}],
  // 예: { label: 'GitHub', url: 'https://github.com/실제아이디' }
  // Email은 mailto:주소, SNS는 실제 https 주소를 입력하세요. 빈 항목은 표시되지 않습니다.
  contacts:[]
};
