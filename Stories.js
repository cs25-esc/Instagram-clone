import React, { useState } from 'react'
import Feed from './Feed';
import './Stories.css'





export function Story(props) {

  const [iborder , setiborder] = useState("3px solid red");

  // const [data , setdata] = useContext(store)

  const story_helper = () => {
    setiborder("2px solid white")
    props.setInd(props.id)
    props.setDisplay(true)
    setTimeout(() => {
      props.setDisplay(false);
    }, 3000);
      
   }
  
  
  
  return (
  <div className='box'>
    <div className='Story'>
        <div className='Container' style = {{ border : iborder }} onClick={story_helper}> 
        <img src={props.imgAd} alt="" />
        </div>
        {props.name.length > 9 ? <p>{props.name.slice(0,9) + ".."}</p> : <p>{props.name}</p>}
    </div>
    
    </div> 
  )
}


function Stories() {

  const [StoryData , setStoryData]  = useState([
    {imgAd : "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "bunty"},
    {imgAd : "https://images.pexels.com/photos/3657143/pexels-photo-3657143.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "purple"},
    {imgAd : "https://images.pexels.com/photos/7410722/pexels-photo-7410722.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "mathews"},
    {imgAd : "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "snow ball"},
    {imgAd : "https://images.pexels.com/photos/325117/pexels-photo-325117.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "summer"},
    {imgAd : "https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "ellipsy"},
    {imgAd : "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "snoopy"},
    {imgAd : "https://images.pexels.com/photos/3643714/pexels-photo-3643714.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "gar field"},
    {imgAd : "https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "cheems"},
    {imgAd : "https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "tobias"},
    {imgAd : "https://images.pexels.com/photos/5257587/pexels-photo-5257587.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "whiler"},
    {imgAd : "https://images.pexels.com/photos/3257811/pexels-photo-3257811.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "natalie"},
    {imgAd : "https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "dusky"},
    {imgAd : "https://images.pexels.com/photos/3941855/pexels-photo-3941855.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "alex"},
    {imgAd : "https://images.pexels.com/photos/16623474/pexels-photo-16623474/free-photo-of-dog-with-tie.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "mr mike"},
    {imgAd : "https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "ginger"},
    {imgAd : "https://images.pexels.com/photos/7410722/pexels-photo-7410722.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "mathews"},
    {imgAd : "https://images.pexels.com/photos/14721098/pexels-photo-14721098.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "buapa"},
    {imgAd : "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=800" , name : "ruvy"},

  ])

  const [display , setDisplay] = useState(false)
  const [ind , setInd] = useState(0)

  return (
    <div>
    <div className='Stories'>
      { display && ( 
      <div className='DisplayStory'>
        <img src={StoryData[ind].imgAd}></img>
      </div>
      )
      }
         <div className='s_section'>
         {
        StoryData.map((item , index) => (
          <Story id = {index} imgAd = {item.imgAd} name = {item.name} setDisplay={setDisplay} setInd={setInd}/>
        ))
        }
        </div>
        
    </div>
    <Feed />
    <Feed />
    </div>
  )
}

export default Stories