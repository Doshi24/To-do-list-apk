
function Todolist(props) {
    return (
        <div className="todolist">
            <li className="list-item">
                {props.item}
                <span>
                    <i class="fa-solid fa-trash"
                    onClick={e=>{
                        props.deletlistitem(props.index)
                    }}></i>
                </span>
            </li>
        </div>
    )
}

export default Todolist