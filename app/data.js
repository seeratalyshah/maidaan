// import atleticos from "@/images/atleticos.png";
// import barcode from "@/images/atleticos.png";
// import salford from "@/images/atleticos.png";
import news1 from "@/images/media-images/news1.webp";
// import video1 from "@/images/video1.jpg";
// import video2 from "@/images/video2.JPG";
// import video3 from "@/images/video3.JPG";
// import video4 from "@/images/video4.jpg";
// import video5 from "@/images/video5.JPG";
import news7 from "@/images/media-images//news7.jpg";
import news9 from "@/images/media-images/news9.jpg";
import nrk from "@/images/news-logos/nrk.png";
import geoLogo from "@/images/news-logos/geo-logo.png";
import theNewsLogo from "@/images/news-logos/the-news-logo.png";
import news8 from "@/images/media-images/news8.jpg";
import euroLogo from "@/images/news-logos/euro-logo.png";
import qatar from "@/images/media-images/qatar-2023.webp";
import isbSCWC from "@/images/media-images/isb-scwc.webp";
import isbLogo from "@/images/news-logos/islamabad.webp";
import peLogo from "@/images/news-logos/pe-logo.png";
import inpLogo from "@/images/news-logos/inp-logo.png";
import inpNews from "@/images/media-images/inp-news.webp";

export const newsCards = [
  {
    id: 1,
    image: news7,
    channelLogo: geoLogo,
    link: "https://www.geo.tv/latest/556740-pakistan-street-child-football-team-secures-spot-in-norway-cup-2024-playoffs",
    title:
      "Pakistan street child football team secures spot in Norway Cup 2024 playoffs",
    date: "July 30, 2024",
    views: 325,
    comments: 0,
    description:
      "Playing under the name of Muslim Hands FC, Pakistan's U17 street child football team has grabbed a spot in the Norway Cup 2024 playoffs after their third consecutive victory as they defeated Oystese IL Oystese/Norheimsund 3-1 on Tuesday.",
  },
  {
    id: 2,
    image: news9,
    channelLogo: nrk,
    link: "https://www.nrk.no/norge/muslim-hands-pakistan-_-et-lag-med-gategutter-pa-norway-cup-1.16504248",
    title:
      "From the Streets to the Norway Cup: 'They Came with Worn-Out Football Shoes Taped Together'",
    date: "Aug 04, 2023",
    views: 325,
    comments: 0,
    description:
      "The Pakistani street football team has sparked enormous enthusiasm. Now, the 17-year-olds are ready for the Norway Cup final.",
  },
];

export const blogs = [
  {
    id: 1,
    newsChannels: [inpLogo],
    image: inpNews,
    title:
      "Pakistan Street child football team reveals kit for Norway Cup 2024",
    description:
      "The Pakistan Street Child Football Federation has unveiled its new kit for the Norway Cup 2024 as the national team departs for the tournament.",
    link: "https://www.inp.net.pk/news-detail/sports/pakistan-street-child-football-team-reveals-kit-for-norway-cup-2024",
  },
  {
    id: 2,
    image: news7,
    newsChannels: [geoLogo],
    link: "https://www.geo.tv/latest/556740-pakistan-street-child-football-team-secures-spot-in-norway-cup-2024-playoffs",
    title:
      "Pakistan street child football team secures spot in Norway Cup 2024 playoffs",
    date: "July 30, 2024",
    description:
      "Playing under the name of Muslim Hands FC, Pakistan's U17 street child football team has grabbed a spot in the Norway Cup 2024 playoffs after their third consecutive victory as they defeated Oystese IL Oystese/Norheimsund 3-1 on Tuesday.",
  },
  {
    id: 3,
    image: news8,
    newsChannels: [theNewsLogo],
    link: "https://www.thenews.com.pk/print/1214377-win-for-pakistan-street-child-team",
    title: "Win for Pakistan street child team",
    date: "July 29, 2024",
    description:
      "ISLAMABAD: Pakistan’s street child football team Sunday got off to a winning start in the Norway Cup beating Norway’s Astoor Club 6-1 in Oslo (Norway). ",
  },
  {
    id: 4,
    image: news9,
    newsChannels: [nrk],
    link: "https://www.nrk.no/norge/muslim-hands-pakistan-_-et-lag-med-gategutter-pa-norway-cup-1.16504248",
    title:
      "From the Streets to the Norway Cup: 'They Came with Worn-Out Football Shoes Taped Together'",
    date: "Aug 04, 2023",
    description:
      "The Pakistani street football team has sparked enormous enthusiasm. Now, the 17-year-olds are ready for the Norway Cup final.",
  },
  {
    id: 5,
    image: news1,
    newsChannels: [peLogo],
    link: "https://mofa.gov.pk/press-releases/pakistan-qualifies-for-street-child-football-world-cup-final?mission=abu-dhabi",
    title: "Pakistan qualifies for Street Child Football World Cup Final",
    date: "October 14, 2018",
    description:
      "Pakistan has reached the final of the Street Child Football World Cup 2018. The event is held right before every FIFA World Cup to highlight the plight of street children all over the world.",
  },
];

export const shortNews = [
  {
    id: 1,
    image: news8,
    channelLogo: theNewsLogo,
    link: "https://www.thenews.com.pk/print/1214377-win-for-pakistan-street-child-team",
    title: "Win for Pakistan street child team",
    date: "July 29, 2024",
    views: 325,
    comments: 0,
    description:
      "ISLAMABAD: Pakistan’s street child football team Sunday got off to a winning start in the Norway Cup beating Norway’s Astoor Club 6-1 in Oslo (Norway).",
  },
  {
    id: 2,
    image: qatar,
    channelLogo: euroLogo,
    link: "https://www.euronews.com/culture/2023/04/10/meet-the-football-team-from-pakistan-who-won-the-hearts-of-crowds-in-qatar",
    title:
      "Meet the football team from Pakistan who won the hearts of crowds in Qatar",
    date: "April 10, 2023",
    views: 325,
    comments: 0,
    description:
      "In Pakistan, more than 22 million children are out of school, and more than 7.5 million children are on the streets.",
  },
  {
    id: 3,
    image: isbSCWC,
    channelLogo: isbLogo,
    link: "https://www.islamabadscene.com/pakistan-finishes-street-child-football-world-cup-runner-up/",
    title: "Pakistan finishes Street Child Football World Cup runner up",
    date: "October 18, 2022",
    views: 325,
    comments: 0,
    description:
      "Pakistan, after putting up a valiant show throughout the tournament, finished as runner-up in the Street Child Football World Cup 2022, after losing to Egypt in the final.",
  },
];

// export const mainVideo = {
//   id: 1,
//   image: video1,
//   videoUrl: "/videos/training-video.mp4",
//   date: "February 14, 2025",
//   title: "Pakistan's Largest Grassroots Football Development Program",
//   time: "02:00",
//   description:
//     "Maidaan - Muslim Hands has kicked off its Preliminary Training Camp for over 175 Under-17 football players from across Pakistan! This camp is being held at Muhammad Rasheed Football Ground, Muslim Hands Educational Complex, Wazirabad. These street-connected children will receive food, accommodation, entertainment, and various healthy activities, along with intensive physical and football training. 🏋️‍♂️⚽The best-performing players will be shortlisted for Norway Cup 2025 and the Street Child Football World Cup USA 2026! 🌍🏆",
// };

// export const videoNews = [
//   {
//     id: 1,
//     image: video2,
//     date: "February 28, 2018",
//     videoUrl: "/videos/training-video.mp4",
//     time: "02:00",
//     title:
//       "Strategies for Environmentally Friendly Logistics Friendly Logistics",
//     description:
//       "National league football stadiums serve as iconic symbols of passion, rivalry, and sporting excellence around the world. From the grandeur of Wembley Stadium to the historic significance of Maracanã, these […]…",
//   },
//   {
//     id: 2,
//     image: video3,
//     time: "02:00",
//     videoUrl: "/videos/training-video.mp4",
//     date: "February 28, 2018",
//     title:
//       "Strategies for Environmentally Friendly Logistics Friendly Logistics",
//     description:
//       "National league football stadiums serve as iconic symbols of passion, rivalry, and sporting excellence around the world. From the grandeur of Wembley Stadium to the historic significance of Maracanã, these […]…",
//   },
//   {
//     id: 3,
//     image: video4,
//     time: "02:00",
//     videoUrl: "/videos/training-video.mp4",
//     date: "February 28, 2018",
//     title:
//       "Strategies for Environmentally Friendly Logistics Friendly Logistics",
//     description:
//       "National league football stadiums serve as iconic symbols of passion, rivalry, and sporting excellence around the world. From the grandeur of Wembley Stadium to the historic significance of Maracanã, these […]…",
//   },
//   {
//     id: 4,
//     image: video5,
//     time: "02:00",
//     videoUrl: "/videos/training-video.mp4",
//     date: "February 28, 2018",
//     title:
//       "Strategies for Environmentally Friendly Logistics Friendly Logistics",
//     description:
//       "National league football stadiums serve as iconic symbols of passion, rivalry, and sporting excellence around the world. From the grandeur of Wembley Stadium to the historic significance of Maracanã, these […]…",
//   },
// ];

// export const tickets = [
//   {
//     id: 1,
//     day: "Monday",
//     date: "03",
//     month: "October",
//     barCode: barcode,
//     title: "FIRST NATIONAL LEAGUE",
//     location: "08:00 Atleticos Stadium",
//     players: "ATLETICOS — SALFORD RANGERS",
//     teamOne: atleticos,
//     teamTwo: salford,
//   },
//   {
//     id: 2,
//     day: "Monday",
//     date: "03",
//     month: "October",
//     barCode: barcode,
//     title: "FIRST NATIONAL LEAGUE",
//     location: "08:00 Atleticos Stadium",
//     players: "ATLETICOS — SALFORD RANGERS",
//     teamOne: atleticos,
//     teamTwo: salford,
//   },
//   {
//     id: 3,
//     day: "Monday",
//     date: "03",
//     month: "October",
//     barCode: barcode,
//     title: "FIRST NATIONAL LEAGUE",
//     location: "08:00 Atleticos Stadium",
//     players: "ATLETICOS — SALFORD RANGERS",
//     teamOne: atleticos,
//     teamTwo: salford,
//   },
// ];

export const videoGallery = [
  {
    id: 1,
    type: "youtube",
    link: "https://www.youtube.com/embed/DKEaGvoFGLE",
    title: "Youtube Video",
  },
  {
    id: 2,
    type: "local",
    link: "/videos/bol-tv.mp4",
    title: "Local Video",
  },
  {
    id: 3,
    type: "youtube",
    link: "https://www.youtube.com/embed/XQUEq6sKluc",
    title: "Youtube Video",
  },
  {
    id: 4,
    type: "local",
    link: "/videos/training-video.mp4",
    title: "Local Video",
  },
  {
    id: 5,
    type: "local",
    link: "/videos/humtv.mp4",
    title: "Local Video",
  },
  {
    id: 6,
    type: "local",
    link: "/videos/express-news.mp4",
    title: "Local Video",
  },
];
