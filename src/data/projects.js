const projectsData = {
  data: [
    {
      desktop_image: require('./screenshots/MatchMeimgur.jpg'),
      mobile_image: require('./screenshots/MatchMemobileimgur.png'),
      title: 'MatchMe',
      date: '2016',
      github_url: 'https://github.com/Quadraticpancake/matchme',
      project_url: 'http://matchme1.herokuapp.com/',
      background: 'MatchMe is a gamified dating web application wherein users act as matchmakers instead of browsing for themselves. Fun for both those on and off the dating market, MatchMe lets users choose matches for other random compatible users by selecting which of the two candidates is the best match for that person. Players earn points for making matches and can spend points within the game. If a pair gets matched enough they have the ability to chat and like each other. The application also includes a multi-player voting mode and an algorithmic recommendation engine that analyzes facial characteristics of matches a user liked to offer them other potential matches.',
      role: 'I designed the majority of the database schemas and optimized for scalability with thorough normalization and efficient queries. I implemented the chat system and the multiplayer mode with Websockets/Node.js on the backend and React/Redux on the frontend.',
      tech_stack: ['React.js', 'socket.io', 'Redux', 'PostgreSQL', 'Node.js', 'express']
    },
    {
      desktop_image: 'https://fat.gfycat.com/ElatedNastyGerbil.webm',
      mobile_image: require('./screenshots/Qmobileimgur.png'),
      gfycat: 'SilkyNextIrishwolfhound',
      title: 'Q',
      date: '2015',
      github_url: 'https://github.com/QMusicPlayer/Q',
      project_url: 'http://qplayer.herokuapp.com/',
      background: 'Have you ever been at a party and wished it was easier for you and your friends to choose the host\'s music? Q solves this problem by offering shared playlists that can be accessed in the browser (no app download required) by everyone at the party. While the host has ultimate control over which song is playing, guests can search Soundcloud for songs and queue them up. Guests can also vote on which song plays next.',
      role: 'I designed this application for scalability. I used Websockets to synchronize the playlists between the host and the clients in real time. On the client side, I modified the open source Angular-SoundManager2 to send and receive socket events. Node.js was a natural choice for the backend because of its ability to send thousands of Websocket messages per second.',
      tech_stack: ['AngularJS', 'socket.io', 'Ionic', 'MongoDB', 'Node.js']
    },
    {
      desktop_image: require('./screenshots/MapAppimgur.jpg'),
      mobile_image: '',
      title: 'MapApp',
      date: '2016',
      github_url: 'https://gist.github.com/jchen85/56a529040826528072a0',
      project_url: 'https://bl.ocks.org/jchen85/raw/56a529040826528072a0/',
      background: 'This was an experiment in recursion and graph databases.',
      role: 'I used a Node.js script to recursively traverse the friends network of a target user. To avoid repeatedly exceeding Twitter\'s rate limit, I designed and implemented a queueing system to throttle requests to Twitter\'s API. My script would queue up callbacks, each of which were ready to grab the next level of friends. Before letting the callbacks fire, the script would check Twitter to be sure I was below the rate limit.\rNext, I processed the data and inserted it into a neo4j graph database. Finally, I rendered the relationships using D3, Leaflet.js, and Arc.js.',
      tech_stack: ['neo4j', 'd3.js', 'Leaflet', 'Node.js']
    },
    {
      desktop_image: require('./screenshots/Restauranteurimgur.jpg'),
      mobile_image: '',
      title: 'Restauranteur',
      date: '2015',
      github_url: 'https://github.com/jchen85/restauranteur',
      project_url: 'https://github.com/jchen85/restauranteur',
      background: 'Restauranteur provides a fun and gamified way to pick a restaurant from the Yelp search results. Two restaurants are displayed side by side, and the user has 5 seconds to pick one. At the end, the winner of the restaurant "tournament" is calculated using the Elo rating formula.',
      role: 'I designed and built this app using AngularJS, Node.js, express, and MongoDB.',
      tech_stack: ['MongoDB', 'express', 'AngularJS', 'Node.js']
    },
  ]
};

export { projectsData };
