import { Button } from 'antd'
export default () => (
    <div className="test">
      <p>This is Test Page...</p>
      <Button>Test page</Button>
      <style jsx>{`
        .test {
          color: blue;
          font-size: 20px;
        }
      `}</style>
    </div>
)