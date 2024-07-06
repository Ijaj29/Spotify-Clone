import './Content2.css';
import RowData5 from '../constants5/URLS5'
import Row2 from '../row2/Row2';

export default function Content() {
  return (
    <div className='content-wrapper'>
      {RowData5 && RowData5.map((el) => {
        return <Row2 title={el.title} movie_data={el.movie_data} />;
      })}
    </div>
  );
}


