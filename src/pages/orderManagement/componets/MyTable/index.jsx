import React, { useCallback, useEffect, useMemo } from 'react'
import { Form, Input, Table } from 'antd'
import useData from './useData'
import { connect } from 'dva'

export default connect(({ mytable }) => {
  return {
    datax: mytable.datax,
  }
})(MyTable)
function MyTable (props) {
  const { datax, dispatch } = props
  const { data, columns } = useData({
    dispatch,
  })

  console.log(datax, 'datax');
  
  return (
    <Table 
      dataSource={data} 
      columns={columns} 
    />
  )
}




