import React from 'react'
import dayjs from 'dayjs'
import {DatePicker} from 'antd'
function MyDatePicker(props) {
  return (
    <div>
       <DatePicker
             showTime
             format={"YYYY-MM-DD HH:mm:ss"}
             picker="month"
          />
    </div>
  )
}

export default MyDatePicker
