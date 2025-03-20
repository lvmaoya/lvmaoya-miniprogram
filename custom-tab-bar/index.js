Component({
  data: {
    selected: 0,
    color: "#666",
    selectedColor: "#007BFF",
    list: [{
      pagePath: "pages/logs/logs",
      iconPath: "/image/house.svg",
      selectedIconPath: "/image/house-selected.svg",
      text: "组件"
    }, {
      pagePath: "pages/index/index",
      iconPath: "/image/scan.svg",
      selectedIconPath: "/image/scan-selected.svg",
      text: "扫码"
    }, {
      pagePath: "pages/index/index",
      iconPath: "/image/user.svg",
      selectedIconPath: "/image/user-selected.svg",
      text: "我的"
    }]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})