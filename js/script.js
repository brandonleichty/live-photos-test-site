'use strict';

//PHOTO ONE
// Create the playerOne using a pre-existing DOM element.
const playerOne = LivePhotosKit.Player(document.getElementById('my-live-photo-target-element'));

//Asign video and photo source to Live Photo
playerOne.photoSrc = '/live-photos/waves_sm.jpg';
playerOne.videoSrc = '/live-photos/waves.mov';

//Set playback style to full and proactively load video (so user doesn't have to tap on photo to load data)
playerOne.playbackStyle = LivePhotosKit.PlaybackStyle.FULL;
playerOne.proactivelyLoadsVideo = true;

// Listen to events of playerOne
playerOne.addEventListener('canplay', evt => console.log('playerOne ready', evt));
playerOne.addEventListener('error', evt => console.log('playerOne load error', evt));
playerOne.addEventListener('ended', evt => console.log('playerOne finished playing through', evt));




//PHOTO TWO
// Create the playerOne using a pre-existing DOM element.
const playerTwo = LivePhotosKit.Player(document.getElementById('my-live-photo-target-element-2'));

//Asign video and photo source to Live Photo
playerTwo.photoSrc = '/live-photos/splitrock_sm.jpg';
playerTwo.videoSrc = '/live-photos/splitrock.mov';

//Set playback style to full and proactively load video (so user doesn't have to tap on photo to load data)
playerTwo.playbackStyle = LivePhotosKit.PlaybackStyle.FULL;
playerTwo.proactivelyLoadsVideo = true;

// Listen to events of playerTwo
playerTwo.addEventListener('canplay', evt => console.log('playewoTo ready', evt));
playerTwo.addEventListener('error', evt => console.log('playerTwo load error', evt));
playerTwo.addEventListener('ended', evt => console.log('playerTwo finished playing through', evt));
