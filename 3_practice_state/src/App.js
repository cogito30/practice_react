import './App.css';
import Form from './components/Form';

function App() {
  let statuses = [
    'empty',
    'typing',
    'submitting',
    'success',
    'error',
  ];
  

  return (
    <>
      {statuses.map(status => (
        <section key={status}>
          <h4>Form ({status}):</h4>
          <Form status={status} />
        </section>
      ))}
    </>
  );
}

export default App;
