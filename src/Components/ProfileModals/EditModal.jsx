import { useEffect, useRef } from "react"

export default function EditModal({type, open, setOpen}){
	const dialog = useRef();
	let placehold;
	useEffect(() => {
		if(type === 'name') placehold = 'Enter your name'
		if(type === 'specific') placehold = 'Enter your specific'
		if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
	}, [open])
	return (
		<dialog className="modalDialog" ref={dialog}>
			<h2>Edit the field ...</h2>
			<input type="text" placeholder={placehold} className="editModal__input"/>
			<Button
        onClick={() => {
          setOpen(false);
        }}
      >
        <img src={closeImg} className="completedClose-img" />
      </Button>
		</dialog>
	)
}