import * as React from 'react';

function App() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>
        <h1 id='name'>Ahmed Gagan</h1>
        <hr />
        <div className='bodyCard'>
          <img className='myImg' src="../myprofileimage-removebg-preview.png" alt="Ahmed Gagan" />
          <h1 id='pgraph'>MAKING <br /> AMAZING <br /> WEBSITES</h1>
        </div>
        <hr />
        <h1 className='header'>WHO AM I?</h1>
        <hr />
        <p id='introText'>
          Hi! I am <span className='red'>Ahmed</span> 😊 I am interested in <span className="red">game/web development</span> and <span className="red">programming</span> 👨‍💻 I can make games with <span className='red'>Godot</span> and websites with <span className="red">html/css/javascript</span> using <span className='red'>Vuejs </span> or <span className='red'>React</span> or <span className='red'>Vanilla</span>💻 I have over <span className='red'>1.5 years</span> of experience in game development and <span className="red"> over 1 year </span> of experience in web development 💼 I can be your <span className="red">freelancer</span> and make websites and games for you 🔨 I am also a <span className="red">good tutor</span> and have <span className="red">lots of students</span> who are satisfied with my service 🧑‍🏫. Hope to see you soon as my client/student 💁 Thank you 😊 - <span className="green">Ahmed Gagan</span>
        </p>
        <hr />
        <h1 className='header'>WHERE CAN YOU CONTACT ME?</h1>
        <hr />
        <div className='vSpacer'></div>
        <div id="socialMedia">
          <a id="linkedin" href="https://www.linkedin.com/in/ahmed-gagan-15698923b/"><img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" alt='Linked In' /> </a>
          <div className='spacer'></div>
          <a id="discord" href="https://discord.com/invite/adgannnn#2399"><img src="https://img.icons8.com/color/48/000000/discord--v2.png" alt="Discord" /> </a>
          <div className='spacer'></div>
          <a id="youtube" href="https://www.youtube.com/channel/UCJ-_7mwDnDXbfDSn5_DTnlg"><img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="YouTube" /> </a>
          <div className='spacer'></div>
          <a id="fiverr" href="https://fiverr.com/aggames616"><img src="https://img.icons8.com/color/48/000000/fiverr.png" alt="Fiverr" /> </a>
          <div className='spacer'></div>
          <a id="twitter" href="https://twitter.com/ahmedgagan11"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter" /> </a>
        </div>
      </body>
    </>
  );
}

export default App;