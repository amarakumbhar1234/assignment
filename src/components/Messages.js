import React from 'react'
import MailIcon from "../icons/mail.png"
import PluseIcon from "../icons/pluse.png"
import MessengerIcon from "../icons/messenger.png"
import TwitterIcon from "../icons/twitter.png"

const Messages = () => {

   let messages = [
    {
        icon : PluseIcon,
        title:"New flow",
        subtitle:"",
    },
    {
        icon :MailIcon,
        title:"Coffee?",
        subtitle:"Marisa Lu",
    },
    {
        icon : MailIcon,
        title:"Feedback",
        subtitle:"Lindesay Weiss",
    },
    {
        icon : MailIcon,
        title:"Post-grad plans",
        subtitle:"Evelyn Ma",
    },
    {
        icon : MailIcon,
        title:"Launch Plan",
        subtitle:"Denis Jin",
    },
    {
        icon : MessengerIcon,
        title:"Victoria Wang",
        subtitle:"",
    },
    {
        icon : MessengerIcon,
        title:"Advit Kalakkad",
        subtitle:"",
    },
    {
        icon : TwitterIcon,
        title:"Danny Trinh",
        subtitle:"",
    },
    
   ]


  return (
        <div>
            {
                messages.map((message,idx)=>{
                    return (
                        <div key={idx} className='py-1 px-4 m-1 d-flex cursor-pointer hover:bg-slate-50 hover:bg-opacity-50 border rounded-xl'>
                            <img className='m-2 w-4 h-4 inline-block' src={message.icon}  alt="message" />
                            <span className='ml-2 text-sm font-medium text-gray-600'>{message.title}</span>
                            {
                                message.subtitle && 
                                <span className='text-xs text-gray-400'>
                                    <span className='mx-1'>.</span>
                                    <span> {message.subtitle} </span>
                                </span>
                            }
                        </div>
                    )
                })
            }
        </div>

  )
}

export default Messages