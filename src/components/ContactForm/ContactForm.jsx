import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const haldleSubmit = e => {
    e.preventDefault();

    contacts.map(contact => contact.name).includes(name)
      ? alert(`${name} is already in contacts.`)
      : dispatch(addContact({ name, phone }));

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    // <form onSubmit={haldleSubmit} autoComplete='off'>
    <form onSubmit={haldleSubmit}>
      <label>
        <p className={s.text}>Name</p>
        <input
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={s.input}
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <p className={s.text}>Phone</p>
        <input
          type='tel'
          name='phone'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
          required
          className={s.input}
          value={phone}
          onChange={handleChange}
        />
      </label>
      <button type='submit' disabled={!name} className={s.button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
