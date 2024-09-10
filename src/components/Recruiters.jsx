import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import React from 'react'
import { styles } from './styles'
import { Mlengineer } from "@/components/Information"
import { SDE } from "@/components/Information"
import { DataScientist } from "@/components/Information"
const Recruiters = () => {
  const handleDownload=()=>{
    const fileUrl = '/Aditya_Ryaka_Resume.pdf'
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Aditya_Ryaka_Resume.pdf';
    
 
    document.body.appendChild(link);
    
    link.click();
    
   
    document.body.removeChild(link);

    window.open(fileUrl, '_blank');
  }
  return (
    <div className=' w-full text-center bg-black pt-10 pb-10 hover:cursor-default' id='recruiters'>
    <h1 className={styles.SectionHead}>Professional Overview</h1>
    <h3 className={styles.SectionSubHead}>See why I'm a great fit.</h3>
    <div className="flex items-center justify-center  pt-10 pb-5">
    <Tabs defaultValue="mlengineer" className="md:w-1/3  ">
      <TabsList className=" bg-gray-900 grid w-full grid-cols-3 h-18 space-x-1 rounded ">
        <TabsTrigger value="mlengineer" className='hover:bg-slate-400 '>ML Engineer </TabsTrigger>
        <TabsTrigger value="sde" className='hover:bg-slate-400'>SDE</TabsTrigger>
        <TabsTrigger value="datascientist" className='hover:bg-slate-400'>Data Scientist</TabsTrigger>
      </TabsList>
      <TabsContent value="mlengineer">
        <Card className=''>
          <CardHeader>
            <CardTitle className={styles.ItemHead}>ML Engineer</CardTitle>
            <CardDescription className={styles.ItemSubHead}>
            <p className='text-gray-400'>Are you looking for an ML related role?</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 ">
            {Mlengineer.map((props,index)=>(
             <div key={index}>
             <div className="text-center">
                 <h2 className="text-xl text-white">{props.title}</h2>
                 <hr/>
                 <br/>
             </div>
             <div className="grid grid-cols-4 gap-4 place-items-center ">
               {props.items.map((icons,index)=>(
                  <img key={index} src={icons} alt='image' className="w-14 h-14"/>
               )
             )
               }
             </div>
             </div>
            ))}
          </CardContent>
          <CardFooter>
          <Button className='bg-white h-10 w-40 rounded text-black text-xl hover:bg-gray-400 active:bg-slate-800 active:text-white' onClick={handleDownload}>Download Resume</Button>          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="sde">
        <Card>
          <CardHeader>
            <CardTitle className={styles.ItemHead}>Software Developer</CardTitle>
            <CardDescription  className={styles.ItemSubHead}>
              <p className='text-gray-400'>Do you require a Full-Stack developer? </p>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2  ">
          {SDE.map((props,index)=>(
             <div key={index}>
             <div className="text-center">
             <h2 className="text-xl text-white">{props.title}</h2>
                 <hr/>
                 <br/>
             </div>
             <div className="grid grid-cols-4 gap-4 place-items-center ">
               {props.items.map((icons,index)=>(
                  <img key={index} src={icons} alt='image' className="w-14 h-14"/>
               )
             )
               }
             </div>
             </div>
            ))}
          </CardContent>
          <CardFooter>
          <Button className='bg-white h-10 w-40 rounded text-black text-xl hover:bg-gray-400' onClick={handleDownload}>Download Resume</Button>          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="datascientist">
        <Card>
          <CardHeader>
            <CardTitle className={styles.ItemHead}>Data Scientist</CardTitle>
            <CardDescription  className={styles.ItemSubHead}>
            <p className='text-gray-400'>Is the role somewhat related to data-science?</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          {DataScientist.map((props,index)=>(
             <div key={index}>
             <div className="text-center">
             <h2 className="text-xl text-white">{props.title}</h2>
                 <hr/>
                 <br/>
             </div>
             <div className="grid grid-cols-4 gap-4 place-items-center ">
               {props.items.map((icons,index)=>(
                  <img key={index} src={icons} alt='image' className="w-14 h-14"/>
               )
             )
               }
             </div>
             </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button className='bg-white h-10 w-40 rounded text-black text-xl hover:bg-gray-400' onClick={handleDownload}>Download Resume</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
    </div>
  )
}

export default Recruiters