import React from 'react';
import values from '../data/values.json';

class CoreValues extends React.Component {
    state = {
        values,
    };
    render() {
        const { values } = this.state;
        return (
            <section className="core-values">
                <div className="core-values-content">
                    <hr className="core-values-line"/>
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
                {
                    values.map(value => (
                        <div key={value.id} className="values-grid">
                            <div className="grid-item">
                                <img src={value.image} alt={`core value ${value.heading}`}/>
                                <h2>{value.heading}</h2>
                                <div className="hidden-paragraph">{value.paragraph}</div>
                            </div>
                        </div>
                    ))
                }
            </section>
        );
    }
}

export default CoreValues;