import React, { useEffect, useState } from 'react'
import { connect } from 'dva'
import { Table, Button } from 'antd'

export default connect(({ home, loading }) => {
  return {
    data: home.data,
    count: home.count,
    sum: home.sum,
    loading: !!loading.effects['home/fetch'],
  }
})(QCard)
function QCard (props) {
  return (
    <div>
      卡牌
    </div>
  )
}


