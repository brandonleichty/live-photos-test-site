'use strict';

// Create the playerOne using a pre-existing DOM element.
const playerOne = LivePhotosKit.Player(document.getElementById('my-live-photo-target-element'));
playerOne.photoSrc = '/live-photos/waves_sm.jpg';
playerOne.videoSrc = '/live-photos/waves.mov';
// Listen to events the playerOne emits.
playerOne.addEventListener('canplay', evt => console.log('playerOne ready', evt));
playerOne.addEventListener('error', evt => console.log('playerOne load error', evt));
playerOne.addEventListener('ended', evt => console.log('playerOne finished playing through', evt));
// Use the playback controls.
playerOne.playbackStyle = LivePhotosKit.PlaybackStyle.FULL;
// playerOne.play();
// playerOne.pause();
// playerOne.toggle();
// playerOne.stop();
// // Seek the animation to one quarter through.
// playerOne.currentTime = 0.25 * playerOne.duration;
// // Seek the animation to 0.1 seconds into the Live Photo.
// playerOne.currentTime = 0.1;

const playerTwo = LivePhotosKit.Player(document.getElementById('my-live-photo-target-element-2'));
playerTwo.photoSrc = '/live-photos/splitrock_sm.jpg';
playerTwo.videoSrc = '/live-photos/splitrock.mov';

playerTwo.playbackStyle = LivePhotosKit.PlaybackStyle.FULL;

playerTwo.addEventListener('canplay', evt => console.log('playewoTo ready', evt));
playerTwo.addEventListener('error', evt => console.log('playerTwo load error', evt));
playerTwo.addEventListener('ended', evt => console.log('playerTwo finished playing through', evt));
