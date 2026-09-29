import {useParams} from "react-router-dom";
export default function Show() {
    const {id} = useParams();
    return (
        <div>
            <h1>Show Page</h1>
            <p>Watch ID: {id}</p>
        </div>
    );
}