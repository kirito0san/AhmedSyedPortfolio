import React from 'react'
import { Mail } from '../../../../components/icons/mail'
import { Link } from 'react-router-dom'
import { LinkedIn } from '../../../../components/icons/linkedIn'
import { WhatsUpIcon } from '../../../../components/icons/whatsUpIcon'

export const Contact = () => {
    const social = [
        {
            icon: <Mail />, title: "email", text: "jodat.ahmedsyed@gmail.com", link: "mailto:jodat.ahmedsyed@gmail.com"
        },
        {
            icon: <LinkedIn />, title: "LinkedIn", text: "Ahmed Fathy", link: "https://www.linkedin.com/in/ahmed0fathy/"
        },
        {
            icon: <WhatsUpIcon />, title: "phone", text: "01119089816", link: "https://wa.me/+201119089816"
        }
    ]
    return (
        <div className='flex flex-col  w-full'>
            {social.map((item, index) => (
                <Link className='truncate ' target='_blank' title="Email" to={item.link}>
                    <div key={index} className='flex gap-3 px-4 py-2 items-center hover:shadow-2xl hover:scale-105 hover:bg-[#82828257] duration-300'>
                        <div className='bg-[#82828257] p-3 flex justify-center items-center rounded'>
                            {item.icon}
                        </div>
                        <div    >
                            <p className='text-[#878484]'>{item.title}</p>
                            <p className='text-[1rem]'>  {item.text}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
