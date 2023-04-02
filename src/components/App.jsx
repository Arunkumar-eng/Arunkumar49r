import projects from "../projects"

function App(){
    return(
        <div>
               { projects.map((data)=>{
                                return(
                                    <article className="projcont">
                                     <div  className="projlist">
                                       <div>
                                       <div  className="projtit">{data.title}
                                       <div className="projcatg">{data.category}</div></div>
                                       </div>
                                        <div style={{textAlign: "left"}}><text className="projdes">{data.description}</text></div>
                                        <div style={{color: "rgba(0,0,0,.5)",height:"40%",textAlign: "left",padding:"0.25rem",fontWeight: "600"}}>
                                         <ul>
                                         {data.used.map((item) => (
                                         <li>{item}</li>
                                         ))
                                          }
                                          </ul>
                                        </div>
                                          <div style={{display: "flex",justifyContent: "space-between",margin:"1rem 0"}}>
                                        <div className="github_btn"> <a  href= {data.repo} target="_blank"><i class="fab fa-github"></i> Github</a></div>
                                        <div className="view_btn"> <a  href= {data.link} target="_blank"><i class="fas fa-eye"></i> View</a></div>
                                        </div>
                                     </div>
                                    </article>

                                )
                            })
                        }



            </div>
    )
}

export default App;