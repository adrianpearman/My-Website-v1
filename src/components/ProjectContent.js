import React, { Component } from 'react'
import axios from "axios";

class ProjectContent extends Component {
  state = {
    profilePhoto: '',
    startDate: '',
    followers: 6,
    repoURL: 0,
    name: '',
    publicRepos: 0,
    location: 'Toronto',
    commits: []
  }

  // componentDidMount(){
  //   // Grabbing the total amount of commits
  //   const repos = axios
  //     .get("https://api.github.com/users/adrianpearman/repos?per_page=5&&sort=created")
  //     .then(response => {
  //       let index
  //       let data = response.data;
  //       for (index = 0; index < data.length; index++) {
  //         const element = data[index];
  //         let url = element.commits_url
  //         let length = url.length
  //         const concatURL = url.slice(0, length - 6)
  //         axios.get(concatURL).then(response => {
  //           let dataItem = response.data.length
  //           this.setState({
  //             commits: [...this.state.commits, response.data.length]
  //           })
  //         })
  //         .catch(error => {
  //           console.log(`${error}: Unable to grab information commits.`)
  //         })
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  //   // Grabbing the Github statistics
  //   const myGithubProfile = axios
  //     .get("https://api.github.com/users/adrianpearman")
  //     .then(response => {
  //       let data = response.data;

  //       this.setState({ profilePhoto: data.avatar_url })
  //       this.setState({ startDate: data.created_at })
  //       this.setState({ followers: data.followers })
  //       this.setState({ repoURL: data.html_url })
  //       this.setState({ name: data.name })
  //       this.setState({ publicRepos: data.public_repos })
  //       this.setState({ location: data.location })
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // componentWillUpdate(){
  //   let commits = this.state.commits.reduce((a, b) => { return a + b }, 0)
  //   console.log(commits)
  // }

   render(){
     let commits = this.state.commits === [] ? 0 : this.state.commits.reduce((a, b) => { return a + b }, 0)
     let date = this.state.startDate === '' ? new Date().toLocaleDateString().slice(0,9) : this.state.startDate
     let name = this.state.name === '' ? 'Adrian' : this.state.name
     let photo = this.state.profilePhoto === '' ?  '../../images/profilePhoto.jpg' : this.state.profilePhoto

     return <div className="projectContent row">
         <div className="project-description">
           <p>
             "Education is the passport to the future, for tomorrow belongs to those who prepare for it today" - 
             <span className="emphasize">
               Malcom X
             </span>
           </p>
           <p>
             I take great pride in learning new technologies and furthering my knowledge in web development. Below i've highlighted a few of my recent projects, spanning Front End, Back End and Full Stack applications. Besides the few listed below, I publically host all of my work on my
             <a href="https://github.com/adrianpearman/" target="_blank" id="github">
               GitHub
             </a>
             profile. Feel free to checkout more of them over there.
           </p>
           <a href="" target="blank" />
         </div>
         <div className="stats-container">
           <div className="stats">
             <div className="stats-profileInformation">
               <h2>{name}'s GitHub profile </h2>
               <img src={photo} id="profilePhoto" />
               <h2>
                 Location:
                 <br />
                 {this.state.location}
               </h2>
               <h2>
                 On GitHub since:
                 <br />
                 {date}
               </h2>
             </div>
           </div>
           <div className="stats">
             <div className="stats-followers">
               <h2>Followers: </h2>
               <h2>{this.state.followers}</h2>
             </div>
           </div>
           <div className="stats">
             <div className="stats-commits">
               <h2>Total Commits: </h2>
               <h2>{commits}</h2>
             </div>
           </div>
           <div className="stats">
             <div className="stats-repos">
               <h2>Number of Repositories:</h2>
               <h2>{this.state.publicRepos}</h2>
             </div>
           </div>
         </div>
       </div>;
   }
}

export default ProjectContent