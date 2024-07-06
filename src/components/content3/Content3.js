import './Content3.css';
import RowData3 from '../constants3/URLS3'
import Row3 from '../row3/Row3';

export default function Content() {
  return (
    <div className='content-wrapper'>
      {RowData3 && RowData3.map((el) => {
        return <Row3 title={el.title} movie_data={el.movie_data} />;
      })}
    </div>
  );
}


