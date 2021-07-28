// import React, { Component } from 'react';
//
//
// class RegistrationForm extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             text: ''
//         };
//         this.handleTextChange = this.handleTextChange.bind(this);
//         this.handleEmailChange = this.handleEmailChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleSubmit(event) {
//         event.preventDefault();
//         console.log('form is submitted '+ this.state.email);
//     }
//     handleEmailChange(event) {
//         console.log('handleTelChange', this);
//         this.setState({tel: event.target.value});
//     }
//     handleTextChange(event) {
//         console.log('handleTextChange', this);
//         this.setState({text: event.target.value});
//     }
//
//
//
//     render() {
//         // const [addUserMutation, {error, data, loading}] = useMutation(ADD_USER)
//         return (
//
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Введите ваш email"
//                     value={this.state.tel}
//                     onChange={this.handleEmailChange}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Введите ваше сообщение"
//                     value={this.state.text}
//                     onChange={this.handleTextChange}
//                 />
//                 <button
//                     type='submit'
//                     className='header__send'>
//                     ОТПРАВИТЬ
//                 </button>
//             </form>
//         );
//     }
// }
//
// export default RegistrationForm;