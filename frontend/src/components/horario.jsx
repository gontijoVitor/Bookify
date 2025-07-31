import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

function Horario() {
    return (
        <div className="shadow-xl rounded-lg py-3 px-4 my-4 bg-[#3d3d3d]">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2">
                        <h3 className="m-0 text-white font-semibold text-base">
                            Deftonerson Scrobblers - Corte simples
                        </h3>
                        <FontAwesomeIcon icon={faNoteSticky} size="xs" className="text-white" />
                    </div>
                    <div className="flex gap-4 mt-1 text-gray-300 text-sm">
                        <p className="m-0">15:00 - 15:45</p>
                        <p className="m-0">Profissional: Higor</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faEllipsisVertical} size="xl" className="text-gray-400 cursor-pointer my-auto ml-5" />
            </div>
        </div>
    );
}

export default Horario;
