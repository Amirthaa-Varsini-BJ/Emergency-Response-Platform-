export default function Sidebar(){
    return(
        <div className="w-30 bg-gray-900 p-20 text-white-300">
            <h2 className="text-red-900">ERP</h2>
            <ul className="space-y-5">
                <li>Dashboard</li>
                <li>Report Emergency</li>
                <li>Incident Status</li>
                <li>Responder</li>
                <li>Logout</li>
            </ul>
        </div>
        
    );
}