import { Toaster } from 'react-hot-toast';

const ToasterComponent = () => {
  return (
    <div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  )
}

export default ToasterComponent
