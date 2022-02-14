import ReactDom from 'react-dom'

export default function PopupTemplate({children }) {    
  return ReactDom.createPortal(children);
  
}
