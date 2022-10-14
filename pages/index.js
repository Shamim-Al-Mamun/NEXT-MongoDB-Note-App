import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import style from '../components/css/style.module.css';

const Index = ({ notes }) => {
  return (
    <div className={style.notecontainer}>
      <h1 className={style.header}>Notes</h1>
      <div className={style.wrapper}>
        {notes.map((note) => {
          return (
            <div key={note._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${note._id}`}>
                      <a>{note.title}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${note._id}`}>
                    <Button primary>View</Button>
                  </Link>
                  <Link href={`/${note._id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  return { notes: data }
}
export default Index;