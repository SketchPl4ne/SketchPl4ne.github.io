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
  	   }
     //  {
     //    name: "Lemon",
     //    artist: '米津玄師',
     //    url: 'https://sharefs.yun.kugou.com/202004030206/b36d73069a048e12ecca93599900b6ff/G128/M09/10/05/IIcBAFqAzN-AIIU2AD5mqrBi2UA864.mp3',
     //    cover: 'http://p1.music.126.net/6IeZ9MiSSDXifj74nzH6ww==/109951163561494000.jpg',
     //    lrc: '/musics/Lemon.lrc'
     //  },
     //  {
     //    name: "LOSER",
     //    artist: '米津玄師',
     //    url: 'https://sharefs.yun.kugou.com/202004010242/63f77d36c4eb982e5f3e3e3f265f8ff5/G108/M0B/06/13/TJQEAFn5ZiqAXsuOADuM5IzBsC4090.mp3',
     //    cover: 'http://singerimg.kugou.com/uploadpic/pass/softhead/100/20190822/20190822134427228.jpg',
     //    lrc: '/musics/LOSER.lrc'
     //  },
     //  {
     //    name: "ブルーバード",
     //    artist: 'いきものがかり',
     //    url: 'https://sharefs.yun.kugou.com/202004010249/b64bd12af718cd2810d46c3d945f463a/G011/M09/03/13/Sw0DAFUKv1KAOIRbADVsmVXW7Go154.mp3',
     //    cover: 'https://t1.picb.cc/uploads/2020/04/01/kSLVoG.jpg',
     //    lrc: '/musics/qn.lrc'
     //  },
     //  {
     //    name: "なんでもないや",
     //    artist: 'Akie秋绘',
     //    url: 'https://sharefs.yun.kugou.com/202004010258/94ae1b3a243962c31f59587f8195b5b8/G099/M07/19/03/A4cBAFjaYe-AJW9QAFVvN4eGoug772.mp3',
     //    cover: 'http://singerimg.kugou.com/uploadpic/pass/softhead/100/20190322/20190322020138221496.jpg',
     //    lrc: '/musics/msmdbld.lrc'
     //  },
     //  {
     //    name: "紅蓮華",
     //    artist: 'Lisa',
     //    url: 'https://sharefs.yun.kugou.com/202004010304/205140feb4c1aadf85d5b2f70aa248a3/G157/M07/14/03/fZQEAFytf0CAAJcUABX-NzHVU-A259.mp3',
     //    cover: 'https://t1.picb.cc/uploads/2020/04/01/kSLZzc.png',
     //    lrc: '/musics/hlh.lrc'
     //  },
     //  {
     //    name: "LAST STARDUST",
     //    artist: 'Aimer',
     //    url: 'http://49.234.60.223/musics/LASTSTARDUST.mp3',
     //    cover: 'https://t1.picb.cc/uploads/2020/04/01/kSL6WN.jpg',
     //    lrc: '/musics/LASTSTARDUST.lrc'
     //  },
     //  {
     //    name: "Dream It Possible",
     //    artist: 'Delacey',
     //    url: 'http://49.234.60.223/musics/DreamItPossible.mp3',
     //    cover: 'http://p2.music.126.net/Gfq_eVuq7lgilBf0w1g5dg==/109951163088676710.jpg',
     //    lrc: '/musics/DreamItPossible.lrc'
     //  },
     //  {
     //    name: "紅蓮の弓矢",
     //    artist: 'Linked Horizon',
     //    url: 'http://49.234.60.223/musics/hlngs.mp3',
     //    cover: 'http://p2.music.126.net/LaVbjh4z6z5D9b5MftfX1A==/109951163597676980.jpg?param=300x300',
     //    lrc: '/musics/hlngs.lrc'
     //  },
     //  {
     //    name: "平凡之路",
     //    artist: '朴树',
     //    url: 'http://49.234.60.223/musics/pfzl.mp3',
     //    cover: 'http://p2.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=300x300',
     //    lrc: '/musics/pfzl.lrc'
     //  },
     //  {
     //    name: "In The End",
     //    artist: 'Linkin Park',
     //    url: 'http://49.234.60.223/musics/InTheEnd.mp3',
     //    cover: 'http://p2.music.126.net/mM5veAg4Grw6QJ-L2QMa0g==/5961552046309181.jpg?param=300x300',
     //    lrc: '/musics/ite.lrc'
     //  }
    ]
});
