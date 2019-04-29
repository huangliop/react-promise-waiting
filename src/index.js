import React, {useState} from 'react'

export default function PromiseWaiting(props) {
  const [doing,setDoing]=useState(props.children.props.disabled);
  const childClick=props.children.props.onClick;
  function onClick(el) {
    setDoing(true);
    childClick(el).then((result)=>{
      setDoing(false);
      return result;
    })
  }
  const {children,receiveState}=props;
  const newProps={
    ...props.children.props,
    disabled:doing,
    onClick:onClick
  };
  receiveState&&(newProps[receiveState]=doing);
  return (
    <React.Fragment>
      {React.cloneElement(children,newProps)}
    </React.Fragment>
  )
}