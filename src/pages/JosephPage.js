import { useLocation } from 'react-router';
import queryString from 'query-string';

const JosephPage = () => {
  const location = useLocation();

  console.log(location.pathname);
  
  let search = location.search;

  let params = new URLSearchParams(search);  
  let code = params.get('code');
  
  console.log('code:' + code);
  
  //console.log(queryString.parse(location.search));

    return (
    <section>
      <h1>The josephtest index.html Page</h1>
    </section>
    );
  };
  
  export default JosephPage;