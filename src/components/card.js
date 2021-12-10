import React, {Component} from 'react';

class Card extends Component {
    render(props) {
        return (
            <div className="card shadow-xl w-full mb-5 rounded p-5">
                <div className="card-body">
                    <h3>{this.props.title}</h3>
                    <div className="py-5">
                        <p>{this.props.description}</p>
                    </div>
                    <div>
                        <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;