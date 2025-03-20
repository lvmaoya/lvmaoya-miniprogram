// index.js
Page({
  data: {
    scene: ''
  },
  onLoad (query) {
    // scene 需要使用 decodeURIComponent 才能获取到生成二维码时传入的 scene
    const scene = decodeURIComponent(query.scene)
    this.setData({
      scene
    })
  }
})
