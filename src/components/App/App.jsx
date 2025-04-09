import { useSelector } from "react-redux";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import css from './App.module.css';

export default function App() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
		<div className={css.container}>
			<h2>Phonebook</h2>
				<ContactForm />
				<SearchBox />{contacts.length ? ( <ContactList /> ) : ( <p className={css.empty}>There are no contacts</p> )}
				
		</div>
	)
}

// const filter = useSelector((state) => state.filters);
// const filteredContacts = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(filter.toLowerCase().trim())
// // );