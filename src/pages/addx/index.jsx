import React, { useState }  from 'react'
import {Form,Tabs} from 'antd'
import { connect } from 'dva'
import One from '../../components/One'
import Two from '../../components/Two'
import There from '../../components/There'
import qs from 'qs'
import { useEffect } from 'react'
import { useLocation } from 'umi'
export default connect(state=>{
    return {}
})(Addx)
function Addx(props) {
  const [form]=Form.useForm()
  const {dispatch}=props
  const {search}=useLocation()
  const [index,setIndex]=useState('1')
  useEffect(()=>{
    let str=search.substring(1)
    if(str){
      let obj=qs.parse(str)
      console.log(obj);
      form.setFieldsValue(obj)
    }
  },[search])
  const submitFn=()=>{
    form.validateFields().then(values=>{
        dispatch({
            type:"addx/addFormList",
            payload:{
                info:values
            }
        }).catch(err=>{})
    })
  }
  const onChangeTAB=(api)=>setIndex(api)
  return (
    <div>
      <Form form={form}>
        <Tabs
            activekey={index}
            items={[
                {
                    key:'1',
                    label:'表单一',
                    children:<One form={form} onChangeTAB={onChangeTAB}/>
                },
                {
                    key:'2',
                    label:'表单二',
                    children:<Two form={form} onChangeTAB={onChangeTAB}/>
                },
                {
                    key:'3',
                    label:'表单三',
                    children:<There submitFn={submitFn} onChangeTAB={onChangeTAB}/>
                }
            ]}
        />
      </Form>
    </div>
  )
}
