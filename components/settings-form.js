import { html, Component } from "../lib/index.js";

export default class SettingsForm extends Component {
	state = {
		nick: "",
		realname: "",
	};

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let target = event.target;
		let value = target.type == "checkbox" ? target.checked : target.value;
		this.setState({ [target.name]: value });
	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.onSubmit();
	}

	render() {
		return html`
			<form onChange=${this.handleChange} onSubmit=${this.handleSubmit}>
				<label>
					Nickname:<br/>
					<input
						type="username"
						name="nick"
						value=${this.state.nick}
						required autofocus
					/>
				</label>
				<br/><br/>

				<label>
					Real name:<br/>
					<input
						type="text"
						name="realname"
						value=${this.state.realname}
						placeholder="Same as nickname"
					/>
				</label>
				<br/><br/>

				<button>Apply</button>
			</form>
		`;
	}
}
