import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions/index';
 
class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}

	addReminder = () => {
		this.props.addReminder(this.state.text);
	}

	renderReminders = () => {
		const { reminders } = this.props;
		return (
			<ul className="list-group col-sm-8 mt-2">
				{
					reminders.map(reminder => {
						return (
							<li key={reminder.id} className="list-group-item">
								<div className="list-item">
									<div>{reminder.text}</div>
									<div><em>time</em></div>
								</div>
							</li>
						)
					})
				}
			</ul>
		)
	}

	render() {
		return (
			<div className="App"> 
			 <div className="title">
				Reminder
			 </div>
			 <div className="form-inline">  
				<div className="form-group">
					<input 
						type="text" 
						className="form-control" 
						placeholder="I have to..." 
						onChange={(event) => this.setState({text: event.target.value})}
					/>
				</div>
				<button type="button" className="btn btn-success"
					onClick={() => this.addReminder()}
				>Add Reminder</button>
			 </div>
			 {this.renderReminders()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		reminders: state
	}
}

export default connect(mapStateToProps, { addReminder })(App);
