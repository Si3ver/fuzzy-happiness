import { Button } from 'antd'
import './index.css'

export default function HomePage(): JSX.Element {
  return (
    <div className="home-page">
      <Button type="primary" style={{marginLeft: '10px'}}>爬取</Button>
      <Button type="primary">展示</Button>
      <Button type="ghost">退出</Button>
    </div>
  )
}
