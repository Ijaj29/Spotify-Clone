import './Content.css';
import RowData from '../../constants/URLS';
import Row from '../row/Row';

export default function Content() {
  return (
    <div className='content-wrapper'>
      {RowData && RowData.map((el) => {
        return <Row title={el.title} movie_data={el.movie_data} />;
      })}
    </div>
  );
}


