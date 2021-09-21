import { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import axios from 'axios'
import { Button, message } from 'antd'
import './index.css'

export default function HomePage(): JSX.Element {

  const [loaded, setLoaded] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    axios.get('/api/isLogin')
      .then(res => {
        setLoaded(true)
        if (res.data?.data) {
          setIsLogin(true)
        } else {
          setIsLogin(false)
        }
      })
  }, [])

  const crawler = () => {
    axios.get('/api/getData')
    .then(res => {
      console.log(res)
      if (res.data?.data) {
        message.success('爬取成功！')
      } else {
        message.error('爬取失败！')
      }
    })
  }

  const showData = () => {
    axios.get('/api/showData')
    .then(res => {
      if (res.data?.data) {
        console.log(res.data?.data)
      } else {
        message.error('获取数据失败！')
      }
    })
  }

  const logout = () => {
    axios.get('/api/logout')
      .then(res => {
        console.log(res)
        if (res.data?.data) {
          setIsLogin(false)
        } else {
          message.error('退出失败！')
        }
      })
  }

  console.log(loaded, isLogin)
  if (isLogin) {
    if (!loaded) return <div></div>
    return (
      <div className="home-page">
        <Button type="primary" style={{marginLeft: '10px'}} onClick={crawler}>爬取</Button>
        <Button type="primary" onClick={showData}>展示</Button>
        <Button type="ghost" onClick={logout}>退出</Button>
      </div>
    )
  }
  return <Redirect to="/login" />
}
