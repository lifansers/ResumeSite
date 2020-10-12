import React, { Component } from 'react'
import Tooltip from '@material-ui/core/Tooltip'

import Portrait from '../portrait.png'
import GitHubLogo from '../GitHubLogo.png'
import LinkedInLogo from '../LinkedIn.png'
import Skills from './Skills.js'
import Work from './Work.js'
import Coursework from './Coursework.js'
import Projects from './Projects.js'
import './home.css'

class Home extends React.Component{

constructor(props) {
   super(props);
   this.state = {
     selected: 'skills',
   }
 }

select = (category) => (e) =>  {
  this.setState({selected: category});
}



render(){
  return(
    <div className='row'>
<div className='fixed'>
    <div id='makeFloat' className='column'>
      <div id='profile'>
        <img id="myface" src={Portrait} alt='Logo'/>
        <div id='nameMajor'>
          <b>Lifan Long</b>

        </div>
      </div>

      <div className='bottomProfile'>
        <div id='schoolInfo'>
          <b><span id='bigText'>University of Pittsburgh</span></b> <br />
          Computer Science <br />

          Economics<br />
          Expected Graduation: April 2020 <br /> <br/ >
          Email: L.Long14@pitt.edu
          <br/>
        </div>
        <br/>
<Tooltip title='GitHub'>
<a href='https://github.com/lifansers' target='_blank' rel='noopener noreferrer'><img src={GitHubLogo} alt='GitHub Logo' width="50em" /></a>
</Tooltip>


      </div>
    </div>

    <div className='column menuBar'>
      <div className={this.state.selected === 'skills' ? 'button selected' : 'button'} onClick={this.select('skills')}> <span>Skills and Languages </span></div> <br /><br /><br />
      <div className={this.state.selected === 'coursework' ? 'button selected' : 'button'} onClick={this.select('coursework')}> <span>Relevant Coursework </span> </div> <br /><br /><br />
      <div className={this.state.selected === 'work' ? 'button selected' : 'button'} onClick={this.select('work')}> <span>Work Experience </span></div> <br /><br /><br />
      <div className={this.state.selected === 'projects' ? 'button selected' : 'button'} onClick={this.select('projects')}> <span>Other Projects </span></div> <br /><br /><br />
    </div>

    <div className='column arrowBar'>
    </div>
</div>
    <div className='column infoBar'>
    <div id='displayBorder' />

      {this.state.selected === 'skills' ? <Skills/> : ''}
      {this.state.selected === 'coursework' ? <Coursework/> : ''}
      {this.state.selected === 'work' ? <Work/> : ''}
      {this.state.selected === 'projects' ? <Projects/> : ''}
    </div>
    </div>
  )

  }

}


export default (Home)
