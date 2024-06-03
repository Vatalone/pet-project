import { useEffect, useState } from "react";

export default function Header() {
	const[now, setNow] = useState(new Date());
	useEffect(() =>{
		setInterval(() => {setNow(new Date())}, 1000)
	}, [])

  return (
    <header>
      <h1>Time list)</h1>
			<h3>
				Your Best <span className="header_phrase-time">Time</span> <span className="header_phrase-managment">Managment</span> App
			</h3>
      <div>
        <p className="timing">{now.toLocaleTimeString()}</p>
      </div>
    </header>
  );
}
