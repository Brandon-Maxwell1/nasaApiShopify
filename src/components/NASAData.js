import Likebutton from './LikeButton';

const NASAData = (props) => {
    
    return (
        <div className='nasaData' key={props.item.data[0].nasa_id}>
            <h3>{props.item.data[0].title}</h3>
            <p><span>Location:</span> <small><small>{props.item.data[0].location}</small></small></p>
            <p><span>Created:</span> {props.item.data[0].date_created}</p>
            <img className='nasaImg' src={props.item.links?.[0].href} alt="" />
            <div className='likeFeature'>
                <Likebutton />
                <br></br>
            </div>
            <p><span>Description:</span> {props.item.data[0].description}</p>

        </div>
    );
}

export default NASAData