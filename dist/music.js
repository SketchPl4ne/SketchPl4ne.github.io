const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    listMaxHeight: 90,
    order: 'random',
    loop: 'all',
    fixed: false,
    autoplay: false,
    lrcType: 3,
    audio: [
      {
        name: "Lose Yourself",
        artist: 'Eminem',
        //url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_28488382&response=res&type=convert_url&',
        url: '/musics/LoseYourself.mp3',
        cover: 'https://t1.picb.cc/uploads/2019/09/26/gxyvj7.th.jpg',
        lrc: '/musics/LoseYourself.lrc'
      },
	  {
		name: "Radioactive",
        artist: 'Imagine Dragons',
        //url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_3967148&response=res&type=convert_url&',
        url: 'https://sharefs.yun.kugou.com/202003312113/393fa800aebac39d58f3678e4ce3ba5f/G128/M09/10/05/IIcBAFqAzN-AIIU2AD5mqrBi2UA864.mp3',
        cover: 'https://t1.picb.cc/uploads/2019/09/26/gx2eC6.th.jpg',
        lrc: '/musics/Radioactive.lrc'
	  },
      {
        name: "Lemon",
        artist: '米津玄師',
        url: 'https://sharefs.yun.kugou.com/202003312113/393fa800aebac39d58f3678e4ce3ba5f/G128/M09/10/05/IIcBAFqAzN-AIIU2AD5mqrBi2UA864.mp3',
        cover: 'http://singerimg.kugou.com/uploadpic/pass/softhead/100/20190822/20190822134427228.jpg',
        lrc: '/musics/Lemon.lrc'
      }
    ]
});
