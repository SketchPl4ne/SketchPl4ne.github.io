const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Lose Yourself",
        artist: 'Eminem',
        url: 'http://fdfs.xmcdn.com/group23/M04/19/15/wKgJL1hndb3gFhWcACfe-O_xX60253.mp3',
        cover: 'https://t1.picb.cc/uploads/2019/09/26/gxyvj7.th.jpg',
      },
      {
        name: "Radioactive",
        artist: 'Imagine Dragons',
        url: 'http://fdfs.xmcdn.com/group19/M00/7E/B9/wKgJJleoUzui-GY_ABb4fPZlJws404.mp3',
        cover: 'https://t1.picb.cc/uploads/2019/09/26/gx2eC6.th.jpg',
      }
    ]
});