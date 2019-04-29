import React, {useState} from 'react'

export default function PromiseWaiting(props) {
  if(props.children.length){
    throw new Error('Only one children is supported');
  }
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