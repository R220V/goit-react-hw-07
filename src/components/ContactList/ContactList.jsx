import { useSelector } from "react-redux";

import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"

export default function ContactList() {

	const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

	return (
		<>
		<ul className={css.list}>
		{contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase().trim())
          )
          .map((contact) => (
			<li className={css.item} key={contact.id}>
			<Contact contact={contact}/>
			</li>
			))}
		</ul>
		</>
	)
}
