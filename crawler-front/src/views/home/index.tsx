import { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import axios from 'axios'
import { Button } from 'antd'
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

  console.log(loaded, isLogin)
  if (isLogin) {
    if (!loaded) return <div></div>
    return (
      <div className="home-page">
        <Button type="primary" style={{marginLeft: '10px'}}>爬取</Button>
        <Button type="primary">展示</Button>
        <Button type="ghost">退出</Button>
      </div>
    )
  }
  return <Redirect to="/login" />
}
