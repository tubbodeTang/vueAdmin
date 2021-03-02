<template>
  <div class="sidebar-wrapper" :class="{ lightbg: themeType === 'light', darkBg: themeType === 'dark' }">
    <div class="logo-box">
      <img src="./images/logo.png" alt="" />
    </div>
    <div class="nav-wrapper">
      <div class="nav-list" @click="navClick">
        <router-link tag="div" :to="item.path" active-class="active" class="bar-item" v-for="(item, i) in barLists" :key="i">
          <!-- <img :src="item.iconD" v-if="themeType === 'dark'" alt="" /> -->
          <img :src="item.iconL" alt="" />
          <p>{{ item.text }}</p>
        </router-link>
        <img src="./images/menu_b_set.svg" v-if="themeType === 'dark'" alt="" @click="changeThemeColor" />
        <img src="./images/menu_w_set.svg" v-if="themeType === 'light'" alt="" @click="changeThemeColor" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      barLists: [
        {
          text: '滇池概况',
          path: '/dcsurvey',
          iconD: require('./images/b_00.svg'),
          iconL: require('./images/w_00.svg')
        },
        {
          text: '项目成果',
          path: '/project',
          iconD: require('./images/b_01.svg'),
          iconL: require('./images/w_01.svg')
        },
        {
          text: '治排体系',
          path: '/system',
          iconD: require('./images/b_02.svg'),
          iconL: require('./images/w_02.svg')
        },
        {
          text: '数据建设',
          path: '/data',
          iconD: require('./images/b_03.svg'),
          iconL: require('./images/w_03.svg')
        },
        {
          text: '评估决策',
          path: '/decision',
          iconD: require('./images/b_04.svg'),
          iconL: require('./images/w_04.svg')
        },
        {
          text: '知识体系',
          path: '/knowledge',
          iconD: require('./images/b_05.svg'),
          iconL: require('./images/w_05.svg')
        }
      ],
      functionLists: [
        {
          text: '设置',
          iconD: require('./images/menu_b_set.svg'),
          iconL: require('./images/menu_w_set.svg')
        },
        {
          text: '退出',
          iconD: require('./images/menu_b_quit.svg'),
          iconL: require('./images/menu_b_quit.svg')
        }
      ]
    }
  },
  computed: {
    ...mapState(['themeType']),
    themetip() {
      let str = ''
      if (this.themeType === 'dark') {
        str = '蓝色主题'
      } else if (this.themeType === 'light') {
        str = '深色主题'
      }
      return str
    }
  },
  watch: {},
  created() { },
  mounted() {
  },
  methods: {
    ...mapMutations(['updateTheme', 'updateNowBar']),
    navClick() {
      // this.$store.state.dcSurveyMap.map = null
      // this.$store.state.projectSurveyMap.map = null
      // this.$store.state.zpSystemMap.map = null
      // this.$store.state.dataConstructMap.map = null

      this.updateNowBar({ nowBar: '0' }) // 切换路由，默认恢复顶部标签到第一个
      // this.updateNowBar({ nowBar: item.bar })
    },
    changeThemeColor() {
      if (this.themeType === 'dark') {
        this.updateTheme({ themeType: 'light' })
      } else if (this.themeType === 'light') {
        this.updateTheme({ themeType: 'dark' })
      }
      window.document.documentElement.setAttribute(
        'data-theme',
        this.themeType
      )
    },
    // toSetPage () {
    //   this.$router.push('/set')
    // },
    // checkLogin () {
    //   if (!sessionStorage.getItem('tk')) {
    //     this.$router.push({ path: '/login' }) // 跳转到主页
    //   }
    // },
    // loginOut () {
    //   sessionStorage.clear()
    //   this.$router.push({ path: '/login' }) // 跳转到主页
    // }
  }
}
</script>
<style scoped lang='scss'>
.sidebar-wrapper {
  width: 78px;
  height: 100%;
  box-sizing: border-box;
  padding-top: 24px;

  &.lightbg {
    background-image: linear-gradient(134deg, #3e68f7 0%, #4346d3 100%);
  }
  &.darkBg {
    background: #1f2126;
  }
  .btn {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .logo-box {
    width: 40px;
    height: 40px;
    margin: 0px auto 24px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .nav-wrapper {
    height: calc(100% - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .nav-list {
      width: 100%;
      box-sizing: border-box;
    }
    .bar-item {
      position: relative;
      width: 100%;
      height: 86px;
      text-align: center;
      box-sizing: border-box;
      padding: 15px 0;
      cursor: pointer;
      opacity: 0.4;
      img {
        width: 32px;
        height: 32px;
        margin-bottom: 8px;
      }
      p {
        letter-spacing: 0;
        text-align: center;
        @include fontSize(12px, 16px);
        @include font_color("navFontColor");
      }
      &.active {
        opacity: 1;
      }
      .edit-item {
        display: block;
        @include fontSize(14px, 38px);
        @include font_color("fontColorB");
        i,
        span {
          @include fontSize(14px, 38px);
        }
      }
      .choose-pannel {
        position: absolute;
        right: -88px;
        top: 0;
        width: 130px;
        height: 100px;
        z-index: 999;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
        @include background_color("pannelBgColor");
        opacity: 1;
      }
    }
  }
}
</style>
