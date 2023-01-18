import './App.css';
// images
import logo from "./assets/logo-white.png";
import banner from "./assets/banner.png";
// icons
import twitter from "./assets/socialicons/twitter-256.png";
import youtube from "./assets/socialicons/youtube-256.png";
import instagram from "./assets/socialicons/instagram-256.png";
import telegram from "./assets/socialicons/telegram-3-256.png";
import linkedin from "./assets/socialicons/linkedin-6-256.png";
// speakers
import person1 from "./assets/people/person1.png";
import person2 from "./assets/people/person2.png";
import person3 from "./assets/people/person3.png";
import person4 from "./assets/people/person4.png";
// video
import YoutubeEmbed from "./YouTubeEmbed.js";
// stock image
import aboutImage from "./assets/dummy/2023.png";
import volunteersImage from "./assets/dummy/volunteers.png"

function App() {


  const link = "https://notkshitijsingh.github.io"

  function headlink(title, to) {
    return (
      <div className='head-link'>
        <a>{title}</a>
      </div>
    )
  }

  function social(icon, to) {
    return (
      <div className='social'>
        <a href={to}>
          <img src={icon} alt="Social Media Link" />
        </a>
      </div>
    )
  }

  function gap() {
    return (
      <div className="gap"></div>
    )
  }

  function speaker(image_name, name, year) {
    return (
      <div className='speaker-container'>
        <a href="https://youtu.be/dQw4w9WgXcQ">
          <img alt={name} src={image_name} /><br /><br />
          <span>{name}</span><br />
          <span>{year}</span>
        </a>
      </div>
    )
  }

  return (
    <div>
      <div className='head'>
        {headlink("TEDxVITBHOPAL 2023", link)}
        {headlink("SPEAKERS", link)}
        {headlink("OUR PICKS", link)}
        <img alt="TEDxVITBHOPAL Logo" src={logo} className="logo-img" />
        {headlink("ABOUT", link)}
        {headlink("CONTACT US", link)}
        {headlink("BECOME A VOLUNTEER", link)}
      </div>
      {gap()}
      <img alt="Empowering perspectives, inspiring change" src={banner} className="banner" />
      {gap()}
      <div className='socials'>
        {social(twitter, link)}
        {social(youtube, link)}
        {social(instagram, link)}
        {social(linkedin, link)}
        {social(telegram, link)}
      </div>
      {gap()}
      {gap()}
      <div className='speakers' id="speakers">
        <span className='title'>SPEAKERS</span>
        {gap()}
        {gap()}
        <div className='speaker-boxes'>
          {speaker(person1, "Person One", "2023")}
          {speaker(person2, "Person Two", "2023")}
          {speaker(person3, "Person Three", "2023")}
          {speaker(person4, "Person Four", "2023")}
          {speaker(person4, "Person Five", "2022")}
          {speaker(person1, "Person Six", "2022")}
          {speaker(person2, "Person Seven", "2022")}
          {speaker(person3, "Person Eight", "2022")}
        </div>
      </div>
      {gap()}{gap()}
      <div className='our-picks'>
        <span className='title'>OUR PICKS</span>
        {gap()}
        <div className='youtube-box'>
          <YoutubeEmbed embedId="5MgBikgcWnY" />
        </div>{gap()}
        <div className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
      {gap()}{gap()}
      <div className='about'>
        <span className='title'>ABOUT</span>
        {gap()}
        <div className='about-box'>
          <div className='about-text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </div>
          <img src={aboutImage} alt="about-img" />
        </div>
      </div>
      {gap()}{gap()}
      <div className='volunteer'>
        <span className='title'>BECOME A VOLUNTEER</span>
        {gap()}
        <img alt="volunteers" src={volunteersImage} />
        {gap()}
        <span>Fill out this form today!<a href={link}>Sign Up! </a></span>
      </div>
      {gap()}{gap()}
      <div className='footer'>Made with 💛 by <a href={link}>Kshitij Singh</a><br />For Task Round at TEDxVITBHOPAL Club Core Team Recruitment Process</div>
    </div>
  );
}

export default App;
