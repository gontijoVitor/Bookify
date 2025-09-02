//página de login de usuario
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCalendarAlt, faUser, faClock, faList, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Customer_component from "../components/customer_component";

function Customers() {
    return(
        <div className="sec-bg-color shadow-xl rounded-lg" style={{padding: "40px"}}>
            {/* Cabeçalho */}
            <div className="mb-6">
                <h1 className="text-center font-bold">Customers list</h1>
                <Customer_component/>
            </div>
        </div>
    );
}

export default Customers;