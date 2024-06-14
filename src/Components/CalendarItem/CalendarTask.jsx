import { styled } from "styled-components";

const StyledCalenTask = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 360px;
	padding: 10px 15px;
	background-color: rgb(41, 39, 39);
	border-radius: 6px;
	border: 1px solid #52a9cc;
	color: #fff;
	margin-bottom: 10px;
`;
export default function CalendarTask({ children }) {
  return <StyledCalenTask>{children}</StyledCalenTask>;
}
