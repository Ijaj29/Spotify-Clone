import './Row.css';
import Card from '../card/Card';

export default function Row(props) {
  
  return (
    <div className='row_wrapper'>
      <h3 className='row_title'>{props.title}</h3>
      <div className='row_card'>
        {props.movie_data && props.movie_data.map((data) => {
          return <Card img={data.img} video={data.video} />;
        })}
      </div>
    </div>
  );
}
