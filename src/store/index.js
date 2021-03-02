import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let themeType = 'light'
try {
  if (localStorage.themeType) {
    themeType = localStorage.themeType
  }
} catch (e) {
  console.log(e)
}
export default new Vuex.Store({
  state: {
    themeType: themeType,
    nowBar: '0',
    monitorToken: '',
    fileUrlList: [],
    dcSurveyMap: {
      map: null
    },
    projectSurveyMap: {
      map: null,
      mapPopInfoShow: false,
      currPrjItem: {}
    },
    zpSystemMap: {
      map: null
    },
    dataConstructMap: {
      map: null
    }
  },
  mutations: {
    // 更新主题颜色
    updateTheme (state, payload) {
      state.themeType = payload.themeType
      localStorage.themeType = payload.themeType
      try {
        if (localStorage.themeType) {
          localStorage.themeType = payload.themeType
        }
      } catch (e) {
        console.log(e)
      }
    },

    // control bar
    updateNowBar (state, payload) {
      state.nowBar = payload.nowBar
      localStorage.nowBar = payload.nowBar
      try {
        if (localStorage.nowBar) {
          localStorage.nowBar = payload.nowBar
        }
      } catch (e) {
        console.log(e)
      }
    }
    // updatePrj_mapInfoShow (state, payload) {
    //   state.projectSurveyMap.mapPopInfoShow = payload.infoshow
    // },
    // updatePrj_currPrj (state, payload) {
    //   state.projectSurveyMap.currPrjItem = payload.prjItem
    // }
  }
})
