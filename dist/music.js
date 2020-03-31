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
        url: 'http://fdfs.xmcdn.com/group23/M04/19/15/wKgJL1hndb3gFhWcACfe-O_xX60253.mp3',
        cover: 'https://t1.picb.cc/uploads/2019/09/26/gxyvj7.th.jpg',
        lrc: '/musics/LoseYourself.lrc'
      },
	  {
		name: "Radioactive",
        artist: 'Imagine Dragons',
        url: 'http://fdfs.xmcdn.com/group19/M00/7E/B9/wKgJJleoUzui-GY_ABb4fPZlJws404.mp3',
        cover: 'https://t1.picb.cc/uploads/2019/09/26/gx2eC6.th.jpg',
        lrc: '/musics/Radioactive.lrc'
	  },
      {
        name: "Lemon",
        artist: '米津玄師',
        url: 'https://sharefs.yun.kugou.com/202003312113/393fa800aebac39d58f3678e4ce3ba5f/G128/M09/10/05/IIcBAFqAzN-AIIU2AD5mqrBi2UA864.mp3',
        cover: 'http://singerimg.kugou.com/uploadpic/pass/softhead/100/20190822/20190822134427228.jpg',
        lrc: '/musics/Lemon.lrc'
      },
      {
        name: "LOSER",
        artist: '米津玄師',
        url: 'https://sharefs.yun.kugou.com/202004010242/63f77d36c4eb982e5f3e3e3f265f8ff5/G108/M0B/06/13/TJQEAFn5ZiqAXsuOADuM5IzBsC4090.mp3',
        cover: 'http://singerimg.kugou.com/uploadpic/pass/softhead/100/20190822/20190822134427228.jpg',
        lrc: '/musics/LOSER.lrc'
      },
      {
        name: "ブルーバード",
        artist: 'いきものがかり',
        url: 'https://sharefs.yun.kugou.com/202004010249/b64bd12af718cd2810d46c3d945f463a/G011/M09/03/13/Sw0DAFUKv1KAOIRbADVsmVXW7Go154.mp3',
        cover: 'https://t1.picb.cc/uploads/2020/04/01/kSLVoG.jpg',
        lrc: '/musics/LOSER.lrc'
      }
    ]
});
