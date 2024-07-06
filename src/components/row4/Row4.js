import './Row3.css';
import Card3 from '../card3/Card3';

export default function Row(props) {

  return (
    <div className='row_wrapper'>
      <h3 className='row_title3'>{props.title}</h3>
      <div className='row_card3'>
        {props.movie_data && props.movie_data.map((data) => {
          return <Card3 img={data.img} audio={data.audio} />;
        })}
      </div>
    </div>
  );
}
