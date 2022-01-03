import './App.css';
import Card from './components/Card/Card';

function App() {
  
  const objs =[
    {title: 'Minhaj', description: 'ksdfdjkashgreguiergjkdfnkdcvmdb djkhjkdfahgksdfklvdsvn', img:'https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg'},
    {title: 'Minhaj', description: 'ksdfdjkashgreguiergjkdfnkdcvmdb djkhjkdfahgksdfklvdsvn', img:'https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg'},
    {title: 'Minhaj', description: 'ksdfdjkashgreguiergjkdfnkdcvmdb djkhjkdfahgksdfklvdsvn', img:'https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg'},
    {title: 'Minhaj', description: 'ksdfdjkashgreguiergjkdfnkdcvmdb djkhjkdfahgksdfklvdsvn', img:'https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg'},
    {title: 'Minhaj', description: 'ksdfdjkashgreguiergjkdfnkdcvmdb djkhjkdfahgksdfklvdsvn', img:'https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg'},
    {title: 'Minhaj', description: 'ksdfdjkashgreguiergjkdfnkdcvmdb djkhjkdfahgksdfklvdsvn', img:'https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg'},
    {title: 'Minhaj', description: 'ksdfdjkashgreguiergjkdfnkdcvmdb djkhjkdfahgksdfklvdsvn', img:'https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg'},
    {title: 'Minhaj', description: 'ksdfdjkashgreguiergjkdfnkdcvmdb djkhjkdfahgksdfklvdsvn', img:'https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg'},
    {title: 'Minhaj', description: 'ksdfdjkashgreguiergjkdfnkdcvmdb djkhjkdfahgksdfklvdsvn', img:'https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg'},
    {title: 'Minhaj', description: 'ksdfdjkashgreguiergjkdfnkdcvmdb djkhjkdfahgksdfklvdsvn', img:'https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg'},
    {title: 'Minhaj', description: 'ksdfdjkashgreguiergjkdfnkdcvmdb djkhjkdfahgksdfklvdsvn', img:'https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg'}
  ]
  
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {
        objs.map(obj => <Card
          obj={obj}
        ></Card>)
      }      
    </div>
  );
}

export default App;
