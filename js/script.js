'use strict';

// Create the player using a pre-existing DOM element.
const player = LivePhotosKit.Player(document.getElementById('my-live-photo-target-element'));
player.photoSrc = 'http://brandonleichty.com/live-photos/waves.jpg';
player.videoSrc = 'http://brandonleichty.com/live-photos/waves.mov';
// Listen to events the player emits.
player.addEventListener('canplay', evt => console.log('player ready', evt));
player.addEventListener('error', evt => console.log('player load error', evt));
player.addEventListener('ended', evt => console.log('player finished playing through', evt));
// Use the playback controls.
player.playbackStyle = LivePhotosKit.PlaybackStyle.HINT;
player.playbackStyle = LivePhotosKit.PlaybackStyle.FULL;
player.play();
player.pause();
player.toggle();
player.stop();
// // Seek the animation to one quarter through.
// player.currentTime = 0.25 * player.duration;
// // Seek the animation to 0.1 seconds into the Live Photo.
// player.currentTime = 0.1;
