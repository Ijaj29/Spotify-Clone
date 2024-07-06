import './Content2.css';
import RowData2 from '../constants2/URLS2'
import Row2 from '../row2/Row2';

export default function Content() {
  return (
    <div className='content-wrapper'>
      {RowData2 && RowData2.map((el) => {
        return <Row2 title={el.title} movie_data={el.movie_data} />;
      })}
    </div>
  );
}


