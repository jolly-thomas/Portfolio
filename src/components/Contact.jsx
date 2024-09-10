import React, { useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { useState } from 'react'
import { styles } from './styles'
import emailjs from '@emailjs/browser';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/hooks/use-toast"
const Contact = () => {

  const { toast } = useToast()
  const [loading,setLoading]=useState(false)
  const[err,setError]=useState(null)
  const [form,setForm]=useState({
    name: "",
    email: "",
    content:""
  })
  const handleSubmit=(e)=>{
    (e).preventDefault();
    setLoading(true)
    emailjs
  .send(import.meta.env.VITE_APP_SERVICE_ID,import.meta.env.VITE_APP_TEMPLATE_ID, {
    to_name:'Aditya',
    from_name: form.name,
    from_email:form.email,
    to_email:'adityaryaka@gmail.com',
    message:form.content
  }, {
    publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
    limitRate: {
      throttle: 10000, 
    }
  }
)
  .then(
    (response) => {
      setLoading(false),
      console.log(response),
      setError(false)
      setForm({
        name: "",
        email: "",
        content:""})
         toast({
         title: "Email sent successfully.",
          description: "I will get back as soon as possible!",
         })
    },
    (err) => {
      setError(true),
      setLoading(false)
      console.log(err)
        toast({
         title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
       })
     
      
    },
  );


  }
  const handleChange=(e)=>{
    const {name,value}= e.target
    setForm({...form,[name]:value})

  }
  return (
    <div className='pt-10 pb-10 text-center'>
      <div className='hover:cursor-default' id='contact'>
      <h1 className={styles.SectionHead}>Get in Touch</h1>
      <h3 className={styles.SectionSubHead}>I will get back to you ASAP.</h3>
      </div>
    <div className='w-full flex justify-center items-center pt-10 pb-10  '>
        <form className='md:w-1/2 md:h-1/2 rounded-xl place-content-center shadow-xl shadow-indigo-500/50' onSubmit={handleSubmit} >
        <Card className='  px-6 text-left'>
          <CardHeader>
              <CardTitle>
                <p className={styles.ItemHead}>
                  Contact
                </p>
              </CardTitle>
              <CardDescription>
              <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="name">
                    <p className={styles.ItemSubHead}>Name</p>
                  </Label>
                  <Input className='rounded focus:border-2 h-12 text-xl' name='name' value={form.name} onChange={handleChange} type="text" placeholder="Name" required/>
              </div>
              </CardDescription>
              <CardDescription>
              <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="email">
                    <p className={styles.ItemSubHead}>Email</p>
                  </Label>
                  <Input className='rounded focus:border-2 text-xl w-full h-12' name ='email' value={form.email} onChange={handleChange} type="email" id="email" placeholder="Email" required/>
              </div>
              </CardDescription>
              
              <CardDescription>
              <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="content">
                    <p className={styles.ItemSubHead}>Content</p>
                  </Label>
                  <Textarea className='rounded h-32 text-xl'  name = 'content' value={form.content} onChange={handleChange} placeholder='Write your message here...' required/>
              </div>
              </CardDescription>
              <CardDescription>
              <div className="grid w-full items-center pt-3">
              <Button className='md:w-1/5 w-full rounded bg-white text-black text-[20px] hover:bg-gray-400 active:bg-slate-800 active:text-white ' type='submit'>
                {(!loading)?'Send':'Sending...'}
              </Button>
              </div>
              </CardDescription>
          </CardHeader>
        </Card>
</form>
  <Toaster/>
</div>
</div>
  )
}

export default Contact