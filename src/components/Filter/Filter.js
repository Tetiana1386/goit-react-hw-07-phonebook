import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/contacts-actions';
import {
  getFilter,
  getContacts,
} from '../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  if (!contacts.length)
    return <p>Your phonebook is empty. Please add contact.</p>;
  return (
    <label className={styles.Label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={styles.Input}
        value={filter}
        onChange={event => dispatch(filterContact(event.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

export default Filter;
