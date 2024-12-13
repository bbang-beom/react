import "./css/our-team.css";

function Our_team(props) {
	return(
<div id="container">
    <h1>Our Team</h1>
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="img-container">
            <img src="https://cdn.discordapp.com/attachments/1287976926383837286/1313334215076478976/member-1.png?ex=675cf04d&is=675b9ecd&hm=a4902406e0b90d86968dad13a2846d4c0b56dfdcac9702dc6b8bd1802a5bc023&"/>
          </div>
          <h2>{props.name1}</h2>
          <p>{props.job1}</p>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="img-container">
            <img src="https://cdn.discordapp.com/attachments/1287976926383837286/1313334214858637394/member-3.png?ex=675cf04d&is=675b9ecd&hm=af24dedd8b7e643588fbda395dc98a127eef813d69158e4a1448d6753625f8bf&"/>
          </div>
          <h2>{props.name2}</h2>
          <p>{props.job2}</p>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="img-container">
            <img src="https://cdn.discordapp.com/attachments/1287976926383837286/1313334215319879750/member-2.png?ex=675cf04d&is=675b9ecd&hm=152eff7f069ef813f073b5124b7198733f494e0410865261f8ac4a036e80928a&"/>
          </div>
          <h2>{props.name3}</h2>
          <p>{props.job3}</p>
        </div>
      </div>
    </div>
  </div>
	)
}
export default Our_team;