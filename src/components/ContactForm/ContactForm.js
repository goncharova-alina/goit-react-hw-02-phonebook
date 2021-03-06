import { Component } from "react";
import PropTypes from "prop-types";
import "./ContactForm.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  //   handleSubmitForm = (e) => {
  //     e.preventDefault();

  //     const { name, number } = this.state;
  //     const { onAdd } = this.props;
  //   };

  render() {
    const { name, number } = this.state;

    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange
        />
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
