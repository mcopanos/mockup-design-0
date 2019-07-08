import React from 'react';
import values from '../data/values.json';

class CoreValues extends React.Component {
    state = {
        values,
    };
    render() {
        const { values } = this.state;
        return (
            <section className="tile-set">
                <div className="centered-content">
                    <hr />
                    <h2>Our Core Values</h2>
                    <p>
                        Our core values are essentially our own
                        North Stars. They're the root cause of
                        our wins and what we look to for guidance
                        when we're challenged the most. They push
                        us forward and upward, lead us safely away
                        from missteps, and reminds us why we dou what
                        we do. We think every team should stand for
                        something-why not six things?
                    </p>
                </div>
                <div className="tile-set__container">
                    <div className="tile-set__tiles">
                        {
                            values.map(value => (
                                <div key={value.id} className={`tile tile--${value.color}`}>
                                    <div className="tile__wrapper">
                                        <div className="tile__main">
                                            <div className="tile__content">
                                                <img className="tile__img" src={value.image} alt={`core value ${value.heading}`}/>
                                                <h2 className="tile__heading">{value.heading}</h2>
                                                <p className="tile__text">{value.paragraph}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default CoreValues;
