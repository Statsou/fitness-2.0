const playVideo = function () {
  if (document.querySelector('.video__prview') && document.querySelector('.video__button-play') && document.getElementById('video')) {
    const videoPreview = document.querySelector('.video__prview');
    const buttonPlay = videoPreview.querySelector('.video__button-play');
    const video = document.getElementById('video');

    buttonPlay.addEventListener('click', () => {
      videoPreview.style.display = 'none';
      video.style.display = 'block';
      video.src += '&autoplay=1';
    });
  }
};

export {playVideo};
