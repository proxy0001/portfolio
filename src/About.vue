<template>
  <div id="about" class="flexbox content">
    <div class="head">
      <section>
        <h1 v-html="topic"></h1>        
      </section>  
    </div>
    <div class="body">

      <template v-for="block in blocks">
        <section class="block">
          <h2 v-html="block.title"></h2>
          <hr>
          <!-- p template, depend on block's content type -->
          <template v-if="getContentType(block.content.type)==='p'" v-for="item in block.content.data">
            <p v-html="item"></p>
            <br>
          </template>
          <!-- f-column template, depend on block's content type -->  
          <template v-if="getContentType(block.content.type)==='f-column'" v-for="item in block.content.data">
            <div :class="'f-column' + getColumNumber(block.content.type)">
              
                <span class="subject" v-html="item.subject"></span>
                <span class="description">
                  <!--mail, depend on project's data type -->
                  <a v-if="item.type==='mail'" :href="getLink(item)" v-html="item.display"></a>
                  <!--url, depend on project's data type -->
                  <a v-if="item.type==='url'" :href="getLink(item)" target="_blank" v-html="item.display"></a>
                  <!--text, depend on project's data type -->
                  <p v-if="item.type==='text'" v-html="item.display"></p>
                </span>  
              
            </div> 
          </template>

        </section>
      </template>  
    </div>  
  </div>
</template>

<script>
// import Header from './components/Header'
export default {
  name: 'about',
  data () {
    return {
      topic: '履歷<br>簡介',
      blocks: [
        {
          title: '基本資料',
          content: {
            type: 'f-column-4',
            data: [
              {type: 'text', subject: '姓名', display: '張志瑋'},
              {type: 'mail', subject: 'email', display: 'g.proxy0001@gmail.com', link: 'g.proxy0001@gmail.com'},
              {type: 'url', subject: 'github', display: 'github.com/proxy0001', link: 'https://github.com/proxy0001'},
              {type: 'url', subject: 'website', display: 'proxy0001.com', link: 'http://proxy0001.com'}
            ]
          }
        },
        {
          title: '簡介',
          content: {
            type: 'p',
            data: [
              'TED上有一場演講,作家兼藝術家艾蜜莉‧霍布尼克描述了一生中擁有廣泛 興趣和工作,她稱之為「多向分化潛能者」的人。另一個形容為:「斜槓青年」。大概可以這麼介紹目前的我。不太像程式人,但有過三年網站程式經驗,包含前端與後端;不太像設計師,但做過影片、動畫、有一些設計經驗與思維;不太像藝術家,但偶爾會畫畫、寫詩。',
              '技術上想加入前端部門，增進自己的開發能力，希望團隊是開發維護自家產品的。因著自己不單只是程式技術人員，也具有包含設計相關的其他經歷，希望能整合自身不同面向的經驗，提供並協助團隊成長。'
            ]
          }
        },
        {
          title: '技術能力',
          content: {
            type: 'f-column-9',
            data: [
              {type: 'text', subject: '網站開發', display: 'Javascript, jquery, HTML, CSS, PHP, MySQL, SQL Server。之前工作幾乎不用框架,大部分需求都是自己撰寫,雖然一開始什麼都不會,但也這樣用最基本的方式寫了三年。離開之後開始接觸其他工具,如node.js, aws, vue, bootstrap, sass, web- pack, git等。'},
              {type: 'text', subject: '視覺設計', display: '有一些設計經驗,會使用Photoshop, Illustrator等繪圖排版軟體。'},
              {type: 'text', subject: '影片製作', display: '剪接、後製、2D動畫。After Effect比較熟,剪接軟體用過Premiere, Final Cut。'}
            ]
          }
        },
        {
          title: '主要學經歷',
          content: {
            type: 'f-column-2',
            data: [
              {type: 'text', subject: '網站工程師 3年', display: '廣告公司'},
              {type: 'text', subject: '影像後製人員 1年', display: '影像後製公司'},
              {type: 'text', subject: '電台助理 1年', display: '電台'},
              {type: 'text', subject: '多媒體動畫藝術學系 畢', display: '國立臺灣藝術大學'},
              {type: 'text', subject: '第三類組 畢', display: '國立臺南第一高級中學'}
            ]
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

</style>
