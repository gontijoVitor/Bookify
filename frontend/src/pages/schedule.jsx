//página responsável por listar horarios do prestador de serviço
import ScheduleComponent from "../components/schedule_component.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Schedule() {
    return(
        <div className="sec-bg-color shadow-xl rounded-lg" style={{padding: "40px"}}>
            <h1 className="text-center font-bold">All schedules</h1>
            <ScheduleComponent/>
            <ScheduleComponent/>
            <ScheduleComponent/>
        </div>
    )
}

export default Schedule;