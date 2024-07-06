import './Row2.css';
import Card2 from '../card2/Card2';

export default function Row(props) {

  return (
    <div className='row_wrapper'>
      <h3 className='row_title'>{props.title}</h3>
      <div className='row_card'>
        {props.movie_data && props.movie_data.map((data) => {
          return <Card2 img={data.img} audio={data.audio} />;
        })}
      </div>
    </div>
  );
}
