import './Content2.css';
import RowData6 from '../constants6/URLS6'
import Row2 from '../row2/Row2';

export default function Content() {
  return (
    <div className='content-wrapper'>
      {RowData6 && RowData6.map((el) => {
        return <Row2 title={el.title} movie_data={el.movie_data} />;
      })}
    </div>
  );
}


