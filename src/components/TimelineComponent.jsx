import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experience } from '@/components/Information'
const TimelineComponent = () => {
  return (
	<VerticalTimeline
	animate={true}
	lineColor='white'
	>
		{experience.map((props,index)=>(
		<VerticalTimelineElement
		key={index}
		contentStyle={{background:'white', color:'black',width:'46%'}}
		contentArrowStyle={{borderRight:'15px solid white'}}
		date={props.startDate.concat(' - ',props.endDate)}
		dateClassName='md:text-white text-black font-semiBold'
		icon={
			
			<img src={props.icon} alt='companyLogo' className='rounded-full'/>
		}
    	iconStyle={{ background: 'white', color: 'white'}}>
			<div className='text-left space-y-2 '>
				<h1 className='font-medium text-black text-4xl '>{props.jobTitle}</h1>
				<h2 className='font-medium text-black text-2xl'>{props.company}</h2>
				<ul className='pl-3'>
					{
						props.description.map(
							(item, index) => (
								<li key={index} className='text-black list-disc '>{item}</li>
							)
						)
					}
				</ul>
			</div>
		</VerticalTimelineElement>))
}
	</VerticalTimeline>
  )
}

export default TimelineComponent