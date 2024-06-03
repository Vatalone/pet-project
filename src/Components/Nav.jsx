import Button from "./Button/Button";

export default function Nav({tab, onChange}){
	return(
		<nav className="nav">
			<h3 className="nav__desc">NAVIGATION</h3>
			<ul className="nav__list">
				<li className="nav__item"><Button onClick={() => {onChange('tasks')}} isActive={tab === 'tasks'}>Tasks</Button></li>
				<li className="nav__item"><Button onClick={() => {onChange('calendar')}} isActive={tab === 'calendar'}>Calendar</Button></li>
				<li className="nav__item"><Button onClick={() => {onChange('profile')}} isActive={tab === 'profile'}>Profile</Button></li>
			</ul>
		</nav>
	)
}