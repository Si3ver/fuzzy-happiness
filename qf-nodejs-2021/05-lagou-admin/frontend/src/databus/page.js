class Page {
  constructor() {
    this.curPage = 1
    this.pageSize = 5
    this.curRoute = '#/index/users'
  }

  reset() {
    this.curPage = 1
    this.pageSize = 5
  }

  setCurRoute(route) {
    this.curRoute = route
  }

  setCurPage(curPage) {
    this.curPage = curPage
  }
}

export default new Page()