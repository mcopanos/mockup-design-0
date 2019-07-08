import React from 'react';
import team from '../data/team.json';

class ExpertTeam extends React.Component {
    state = {
        team,
    };
    render() {
        const { team }  = this.state;
        return(
            <section>
                <div className="centered-content">
                    <h2>Our Expert Team</h2><br/>
                    <p>
                        The Mostly Serious team is the product
                        of our commitment to finding those who
                        we affectionately call <em>unicorn people</em>-the
                        rare folks who wield an expert knowledge of their own
                        domain and live by our core values of accountability,
                        integrity, community, devotion, collaboration, and grit.
                        And sure, maybe they have other random talents, like a
                        willingness to literally run around the office delivering
                        high five for every big victory. Overall, though, it's our
                        collective dedication to doing the right thing in the best
                        way that makes us a creative force ot be reckoned with.
                    </p>
                </div>
                <div className="team-cards-wrapper">
                    <div className="team-cards">
                        {
                            team.map(person => (
                                <div key={person.id} className="team-card-wrapper">
                                    <div className="team-card">
                                        <div className="img-wrapper">
                                            <img className="profile-img" src={person.image} alt={`${person.name} profile`} />
                                        </div>
                                        <div className="img-content">
                                            <h2>{person.name}</h2>
                                            <p>{person.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="team-card-wrapper">
                            <div className="team-card-join-wrapper">
                                <div className="team-card team-card-join">
                                    <div className="team-card-join-content">
                                        <h2>Interested in joining our team?</h2>
                                        <p>
                                            We're always looking for another unicorn tha loves to create great
                                            products for our clients and isn't afraid to ask "Why?". If this
                                            is you, we'd love to talk.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ExpertTeam;
