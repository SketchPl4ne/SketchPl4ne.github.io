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
        url: 'http://m10.music.126.net/20200402004457/22cc6d1d512accbcf23c18558327cd43/ymusic/6eed/4ef2/d8ae/b85b958a70552f7e002e33d35075086c.mp3',
        cover: 'http://p1.music.126.net/6IeZ9MiSSDXifj74nzH6ww==/109951163561494000.jpg',
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
        lrc: '/musics/qn.lrc'
      },
      {
        name: "なんでもないや",
        artist: 'Akie秋绘',
        url: 'https://sharefs.yun.kugou.com/202004010258/94ae1b3a243962c31f59587f8195b5b8/G099/M07/19/03/A4cBAFjaYe-AJW9QAFVvN4eGoug772.mp3',
        cover: 'http://singerimg.kugou.com/uploadpic/pass/softhead/100/20190322/20190322020138221496.jpg',
        lrc: '/musics/msmdbld.lrc'
      },
      {
        name: "紅蓮華",
        artist: 'Lisa',
        url: 'https://sharefs.yun.kugou.com/202004010304/205140feb4c1aadf85d5b2f70aa248a3/G157/M07/14/03/fZQEAFytf0CAAJcUABX-NzHVU-A259.mp3',
        cover: 'https://t1.picb.cc/uploads/2020/04/01/kSLZzc.png',
        lrc: '/musics/hlh.lrc'
      },
      {
        name: "LAST STARDUST",
        artist: 'Aimer',
        url: 'https://sharefs.yun.kugou.com/202004010331/b934b1b5f3d51d90c343d52571ea9667/G035/M04/06/03/w4YBAFW2qS6ABHKkAE3VZEJcKgM172.mp3',
        cover: 'https://t1.picb.cc/uploads/2020/04/01/kSL6WN.jpg',
        lrc: '/musics/LASTSTARDUST.lrc'
      },
      {
        name: "Dream It Possible",
        artist: 'Delacey',
        url: 'https://sharefs.yun.kugou.com/202004010348/bd9344a91682c702bb5f6b9b03cf2c44/G148/M02/13/0F/NIcBAFvJVaqAb5N6ADHXW3DSEx4595.mp3',
        cover: 'http://p2.music.126.net/Gfq_eVuq7lgilBf0w1g5dg==/109951163088676710.jpg',
        lrc: '/musics/DreamItPossible.lrc'
      },
      {
        name: "紅蓮の弓矢",
        artist: 'Linked Horizon',
        url: 'http://m10.music.126.net/20200402004354/3e814453232fcd9afbf4f6bb869cbd5c/ymusic/f010/4927/b08e/e61080ec048decaf7f5d5aec10add2fa.mp3',
        cover: 'http://p2.music.126.net/LaVbjh4z6z5D9b5MftfX1A==/109951163597676980.jpg?param=300x300',
        lrc: '/musics/hlngs.lrc'
      },
      {
        name: "平凡之路",
        artist: '朴树',
        url: 'https://sharefs.yun.kugou.com/202004011753/8e882a9347cafab0b3863ba0b5017fec/G136/M04/1A/17/KIcBAFtSTA6AYJczAEmH61ayjB8165.mp3',
        cover: 'http://p2.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=300x300',
        lrc: '/musics/pfzl.lrc'
      },
      {
        name: "In The End",
        artist: 'Linkin Park',
        url: 'http://m10.music.126.net/20200402004001/8cbf017910963fa063bbb7a006f09881/ymusic/9738/663e/7266/85d9aeedb1845faed53ea9aeb94ba85a.mp3',
        cover: 'http://p2.music.126.net/mM5veAg4Grw6QJ-L2QMa0g==/5961552046309181.jpg?param=300x300',
        lrc: '/musics/ite.lrc'
      }
    ]
});
