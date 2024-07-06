import './Content2.css';
import RowData4 from '../constants4/URLS4'
import Row2 from '../row2/Row2';

export default function Content() {
  return (
    <div className='content-wrapper'>
      {RowData4 && RowData4.map((el) => {
        return <Row2 title={el.title} movie_data={el.movie_data} />;
      })}
    </div>
  );
}


