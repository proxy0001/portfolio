<template>
  <div class="flexbox content">
    <div class="head">
      <section>
        <h1 v-html="topic"></h1>        
      </section>  
    </div>
    <div class="body">
      <template v-for="work in works">
        <div class="groups">
          <template v-for="group in work.groups">
            <button class="group" v-html="group"></button>
          </template>  
        </div>
        <section class="work">
          <div class="first">
            <!--image, depend on work's data type -->
            <template v-if="work.type==='image'">
              <img :src="work.data" :alt="work.title"/>
            </template>
            <!--youtube, depend on work's data type -->
            <template v-if="work.type==='youtube'">
              <div class="youtube">
                <iframe class="video" width="100%" height="100%" :src="work.data" frameborder="0" allowfullscreen></iframe>
              </div>  
            </template>
          </div>  
          <p class="date" v-if="work.date" v-html="work.date"></p>
          <a v-if="work.type==='link'" :href="work.data" target="_blank">
          <h2 v-if="work.title" v-html="work.title"></h2></a>
          <h2 v-else="work.title" v-html="work.title"></h2>
          <div v-if="work.type==='post'" class="post">
            <p v-html="work.data"></p>
          </div>  
          <div v-if="work.content" class="second">
            <template v-if="work.content.type==='row'" v-for="item in work.content.data">
              <!--text, depend on item's data type -->
              <p v-if="item.type==='text'" v-html="item.display"></p>
              <!--url, depend on item's data type -->
              <a v-if="item.type==='url'" :href="getLink(item)" target="_blank"><p v-html="item.display"></p></a>
            </template>
          </div>
          <div v-if="work.tags" class="tags">
            <template  v-for="tag in work.tags" >
              <button class="tag" v-html="'#' + tag"></button>
            </template>
          </div>
          
          
          </template>

        </section>
      </template>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'works',
  data () {
    return {
      topic: '作<br>品集',
      works: [
        {
          id: '',
          title: '個人網站 - 本站',
          date: '2016',
          tags: ['Vue', 'Webpack', 'rwd', 'flex', 'sass', 'node.js', 'nginx', 'AWS'],
          groups: ['web'],
          type: 'link',
          data: 'http://proxy0001.com',
          content: {
            type: 'row',
            data: [
              {type: 'text', display: '獨立製作。第一版先做完簡單的靜態呈現。後續預計將資料放入mongodb，使用restful api串接，以及擴增一些blog的基本功能。'},
              {type: 'url', display: 'github', link: 'https://github.com/proxy0001/portfolio'}
            ]
          }
        },
        {
          id: '',
          title: '開展了！',
          date: '2016',
          tags: ['創業', '視覺設計', 'bootstrap', 'rwd'],
          groups: ['web', 'design'],
          type: '',
          data: '',
          content: {
            type: 'row',
            data: [
              {type: 'text', display: '創業計畫提案，參加北藝大-藝術與創業研究的課程，為課堂上的最後成果。全程參與計畫討論，另外負責主視覺設計、網站首頁demo試做。團員有陳依敏與我。'},
              {type: 'url', display: '提案計畫書', link: require('./assets/download/201606162.pdf')},
              {type: 'url', display: '網站試做demo', link: 'http://project-1.proxy0001.com'},
              {type: 'url', display: 'github', link: 'https://github.com/proxy0001/art-demo'}
            ]
          }
        },
        {
          id: '',
          title: '跟著接接學日語',
          date: '2013',
          tags: ['After Effect'],
          groups: ['video'],
          type: 'youtube',
          data: 'https://www.youtube.com/embed/G3ShCCYs23w?rel=0&wmode=transparent',
          content: {
            type: 'row',
            data: [
              {type: 'text', display: '獨立製作。包含動畫設計、影片製作與音樂剪輯，不含視覺素材跟基本layout。'},
              {type: 'url', display: 'owner - FingerRockz', link: 'https://www.facebook.com/FingerRockz/'}
            ]
          }
        },
        {
          id: '',
          title: '影像公司作品集',
          date: '2012',
          tags: ['After Effect', 'Premiere'],
          groups: ['video'],
          type: 'youtube',
          data: 'https://www.youtube.com/embed/0S1rYuimlXI?rel=0&wmode=transparent',
          content: {
            type: 'row',
            data: [
              {type: 'text', display: '內容為公司作品。剪接篩選個人參與較多之部分供參考。'},
              {type: 'url', display: 'company - keyvisual', link: 'http://keyvisual.tw/'}
            ]
          }
        },
        {
          id: '',
          title: '赤峰街-藝術x社區',
          date: '2014',
          tags: ['紀錄片', 'After Effect', 'Premiere'],
          groups: ['video'],
          type: 'youtube',
          data: 'https://www.youtube.com/embed/Ga55fvgcdfQ?rel=0&wmode=transparent',
          content: {
            type: 'row',
            data: [
              {type: 'text', display: '臺北。社瞇瞇所舉辦的都市再生街區經營暨影像記錄行動，是一個為期半年以上的紀錄片課程。團員有陳依敏、林佩姿、黃麗君、褚孝強、陳怡如與我。'}
            ]
          }
        },
        {
          id: '',
          title: '電繪練習',
          date: '2015-06-23',
          tags: ['photoshop'],
          groups: ['CG'],
          type: 'image',
          data: require('./assets/paint/20150623.jpg'),
          content: {
            type: 'row',
            data: [
              {type: 'text', display: '參考攝影作品'},
              {type: 'url', display: 'Giacomo Rebecchi - Photography', link: 'http://giacomorebecchi.com/2423292-bodyeyes'}
            ]
          }
        },
        {
          id: '',
          title: '電繪練習',
          date: '2015-06-26',
          tags: ['photoshop'],
          groups: ['CG'],
          type: 'image',
          data: require('./assets/paint/20150626.jpg'),
          content: {
            type: 'row',
            data: [
              {type: 'text', display: '參考攝影作品'},
              {type: 'text', display: 'Ekaterina Dokuchaeva - Photography'}
            ]
          }
        },
        {
          id: '',
          title: '電繪練習',
          date: '2015-07-05',
          tags: ['photoshop'],
          groups: ['CG'],
          type: 'image',
          data: require('./assets/paint/20150705.jpg'),
          content: {
            type: 'row',
            data: [
              {type: 'text', display: '參考攝影作品'},
              {type: 'url', display: 'Julia Borodina - Photography', link: 'http://eliara.com/portraits'}
            ]
          }
        },
        {
          id: '',
          title: '電繪練習',
          date: '2016-05-05',
          tags: ['photoshop'],
          groups: ['CG'],
          type: 'image',
          data: require('./assets/paint/20160505.jpg'),
          content: {
            type: 'row',
            data: [
              {type: 'text', display: '參考攝影作品'},
              {type: 'url', display: 'Dave Meier - Photography', link: 'http://picography.co/photos/break-dancer/'}
            ]
          }
        },
        {
          id: '',
          title: '鉛筆素描課堂練習',
          date: '2016-01',
          tags: ['pencil'],
          groups: ['sketch'],
          type: 'image',
          data: require('./assets/sketch/20160100.jpg'),
          content: {
            type: 'row',
            data: [
              {type: 'url', display: 'Zudarts - 指導老師', link: 'https://www.facebook.com/zudarts/'}
            ]
          }
        },
        {
          id: '',
          title: '鉛筆素描課堂練習',
          date: '2016-02',
          tags: ['pencil'],
          groups: ['sketch'],
          type: 'image',
          data: require('./assets/sketch/20160200.jpg'),
          content: {
            type: 'row',
            data: [
              {type: 'url', display: 'Zudarts - 指導老師', link: 'https://www.facebook.com/zudarts/'}
            ]
          }
        },
        {
          id: '',
          title: 'sea',
          date: '2010-11',
          tags: ['illustrator'],
          groups: ['graphics'],
          type: 'image',
          data: require('./assets/graphics/20101100.jpg')
        },
        {
          id: '',
          title: 'Pick it Up',
          date: '2007',
          tags: ['Director', 'After Effect'],
          groups: ['animation', 'video'],
          type: 'youtube',
          data: 'https://www.youtube.com/embed/Xh9ttyVMOcA?rel=0&wmode=transparent',
          content: {
            type: 'row',
            data: [
              {type: 'text', display: '大二作品，2D手繪動畫，電腦上色。現場為兩個螢幕同時播放左右兩邊不同的內容。個人負責導演、後製。團隊有張家胤、王安琦、張芮綾、黃虹樺與我'}
            ]
          }
        },
        {
          id: '',
          title: '隔牆的音樂家',
          date: '2009',
          tags: ['手繪動畫', 'After Effect'],
          groups: ['animation', 'video'],
          type: 'youtube',
          data: 'https://www.youtube.com/embed/fRvGJtJXUZI?rel=0&wmode=transparent',
          content: {
            type: 'row',
            data: [
              {type: 'text', display: '大四作品，2D手繪動畫，電腦上色。個人負責人物與彈琴以外的所有動畫與後製。團隊有陳琪蓉、林妤珊與我'}
            ]
          }
        },
        {
          id: '',
          title: '班會',
          date: '2016',
          tags: [],
          groups: ['poem'],
          type: 'post',
          data: '健康檢查結束後<br>班上同學熱烈討論著<br>未來的身高<br><br>我討厭這個話題<br>也不曾參與過<br>毫無意外的<br>我會坐在最前面一排<br>擋住他們視線',
          content: {
            type: 'row',
            data: [
              // {type: 'text', display: ''}
            ]
          }
        },
        {
          id: '',
          title: '所以我們討論的永遠都不是同一件事',
          date: '2014',
          tags: [],
          groups: ['poem'],
          type: 'post',
          data: '不需要安置更多一點的站立<br>來解決坐姿不良的社會疾病<br>我們需要的是躺下的空間<br><br>你說呢？我們的土地有限<br>站立可以容納更多的人<br>這是最好的解決方案',
          content: {
            type: 'row',
            data: [
              {type: 'url', display: '刊登 - 衛生紙詩刊+32', link: 'https://www.facebook.com/169234266466751/photos/a.169253569798154.39496.169234266466751/1201776776545823/?type=3'}
            ]
          }
        },
        {
          id: '',
          title: '小紅帽的肚子劇場',
          date: '2015',
          tags: [],
          groups: ['poem'],
          type: 'post',
          data: '丈量時 大家總是疑惑<br>針線的需求怎麼會比導演安排的多<br>情急之下只好縫上自己的聲音<br><br>直到劇終才聽清楚<br>台上被沉沒的是誰的哀號',
          content: {
            type: 'row',
            data: [
              // {type: 'text', display: '<br>'}
            ]
          }
        },
        {
          id: '',
          title: '我們',
          date: '2014',
          tags: [],
          groups: ['poem'],
          type: 'post',
          data: '透過這樣 我們闡述自己<br>是的 我們自身十分明確<br>那又是什麼時候 我們成為大眾?',
          content: {
            type: 'row',
            data: [
              {type: 'url', display: '刊登 - 衛生紙詩刊+32', link: 'https://www.facebook.com/169234266466751/photos/a.169253569798154.39496.169234266466751/1201776776545823/?type=3'}
            ]
          }
        },
        {
          id: '',
          title: '畢業旅行',
          date: '2014',
          tags: [],
          groups: ['poem'],
          type: 'post',
          data: '探究被海水淹沒的舊時代<br>是高中畢業旅行的標準行程<br><br>從101的頂端 搭乘坐往海底的電梯內<br>換上潛水裝 可一路直達<br><br>開門是過往的東區街道<br>全息投影時見過幾次<br>現在可以小跳躍於路燈間前進<br><br>路旁玻璃大樓內養殖了繽紛的珊瑚<br>樓下復古的咖啡廳<br>在現代的海上都市偶爾能見<br><br>豪宅內有一種時代的切實感<br>游泳池在沉淪海底的至今意義不明<br><br>往鄰近的學校參觀是必須<br>在浸水的教室 坐下拍照<br>分不清 講座與課桌椅應有的相對<br>令人感到愉悅<br><br>與過往相比<br>如今的經濟體系是被顛倒著看<br>昔日的地面 門票不斐<br>101頂端 已如公園<br>想這件事的時候 我發現倒著漂浮會比較容易<br><br>18歲的我對於<br>理不理解大海嘯之前的痕跡<br>毫不關心<br>但如果不是通訊設備的先進<br>我想我會被寂靜扼殺<br>從而思考不盡當代歷史的自我定位<br>或爾強辯自身並未隨波逐流',
          content: {
            type: 'row',
            data: [
              {type: 'url', display: '刊登 - 衛生紙詩刊+32', link: 'https://www.facebook.com/169234266466751/photos/a.169253569798154.39496.169234266466751/1201776776545823/?type=3'}
            ]
          }
        },
        {
          id: '',
          title: '老煙槍',
          date: '2007',
          tags: [],
          groups: ['poem'],
          type: 'post',
          data: '他說他年輕的時候都是一天好幾包的<br>說著說著便打開他的胸膛<br>嗑嗑 嗑嗑<br>灰白的煙不斷噴出<br>他的肺都變成了煙<br><br>關起來<br>他說<br>現在我都不需要抽煙了<br>吸了一口空氣<br>吐出煙來',
          content: {
            type: 'row',
            data: []
          }
        }
      ]
    }
  },
  methods: {
    getLink: function (obj) {
      if (!obj.link || !obj.type) return
      if (obj.type === 'mail') return 'mailto:' + obj.link
      if (obj.type === 'url') return obj.link
    },
    getContentType: function (str) {
      if (str === 'p') return 'p'
      if (str.indexOf('f-column') >= 0) return 'f-column'
      return false
    },
    getColumNumber: function (str) {
      return str.split('f-column')[1]
    }
  },
  computed: {
    test: function () {
      console.log()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import './sass/main.sass'

</style>
