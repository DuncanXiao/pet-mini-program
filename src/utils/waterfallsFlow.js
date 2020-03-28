function Waterfalls () {
  this.dropList = function (drop, list, needSlice = true) {
    let meanHeight = 100// 设置一个落差值,如果两个column的差小于落差值,则平分新增的数据,否则要进行干预
    let listLeft = this.listLeft
    let listRight = this.listRight// 先取到当前的两个list
    if (!listLeft && !listRight) {
      console.error('Please set listLeft and listRight in data')
      throw new Error('listLeft and listRight is null')
    }
    let midIndex = Math.floor(list.length / 2)// 取新增数据列表的中点,作为拆分列表的位置,命名为midIndex
    if (needSlice) {
      // 只有需要调整时才修改midIndex  否则就取中点
      if (drop > meanHeight) {
        // 应该多给右边一个,所以midIndex往前挪
        midIndex--
      } else if (drop < -meanHeight) {
        // 应该多给左边一个,midIndex往后挪
        midIndex++
      }
    };
    let leftArr = list.slice(0, midIndex)
    let rightArr = list.slice(midIndex)// 以midIndex为拆分点,将新增list拆成两端,分别concat到两个list中
    // console.log('落差:',drop,'新获取到的数据:', list.length,'左边新增:',leftArr.length,'右边新增',rightArr.length);
    this.listLeft = listLeft.concat(leftArr)
    this.listRight = listRight.concat(rightArr)
  }

  this.start = function (list, that) {
    if (list.length < 3) return this.dropList(0, list, false)// 如果加载到的数据少于三条,直接进行下一步即可
    // 用wx提供的createSelectorQuery方法来获取当前column的高度:
    // 左边的命名为 l
    const l = new Promise((resolve, reject) => {
      setTimeout(function () {
        const query = wx.createSelectorQuery()
        query.select('#left-column').boundingClientRect(function (res) {
          resolve(res.height)
        }).exec()
      }, 500)
    })
    // 右边的命名为 r
    const r = new Promise((resolve, reject) => {
      setTimeout(function () {
        const query = wx.createSelectorQuery()
        query.select('#right-column').boundingClientRect(function (res) {
          resolve(res.height)
        }).exec()
      }, 500)
    })
    // l和r都获取到以后,求出他们的差,命名为dropHeight:
    Promise.all([l, r]).then(res => {
      let [left, right] = res
      let dropHeight = left - right
      this.dropList.call(that, dropHeight, list) // 然后再进行下一步处理 append
    })
  }
}

export default Waterfalls
